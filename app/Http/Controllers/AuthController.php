<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function register(Request $request){
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|string|unique:users,email',
            'password' => [
                'required',
                'confirmed',
            ]
        ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken( 'main' );

        return response([
            'user' => $user,
            'token' => $token->plainTextToken
        ]);

    }

    public function login(Request $request){
        $credentials = $request->validate([
            'email' => 'required|email|string|exists:users,email',
            'password' => [
                'required'
            ],
            'remember' => 'boolean'
        ]);

        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if(!Auth::attempt($credentials, $remember)){
            return response([
                'error' => 'The Provided credentials are not correct'
            ], 422);
        }
        $user = Auth::user();
        $token = $user->createToken('main');

        return response([
            'user' => $user,
            'token' => $token->plainTextToken
        ]);
    }


    public function logout(){
        $user = Auth::user();
        return $user;
        //Revoke Token that was used to authenticate
        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);

    }
}
