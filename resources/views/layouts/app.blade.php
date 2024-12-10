<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
</head>
<body>
    <header>
        <nav>
            <a href="{{ route('about') }}">À propos</a>
            <a href="{{ route('contact') }}">Contact</a>
            <a href="{{ url('/') }}">Accueil</a>
        </nav>
    </header>
    <main>
        @yield('content')
    </main>
</body>
</html>

