<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="{{ asset('favicon.ico') }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
        name="description"
        content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="{{ asset('logo192.png') }}" />
        <link rel="manifest" href="{{ asset('mix-manifest.json') }}" />
        <link rel="stylesheet" href="{{ asset('css/lib/normalize.css') }}">
        <link rel="stylesheet" href="{{ asset('font/font.css') }}">
        <link rel="stylesheet" href="{{ asset('css/index.css') }}">
        <title>Code da-Vinchi</title>
        <script src="{{ asset('js/app.js') }}" defer></script>
    </head>
    <body class="antialiased">
        <div id="root"></div>
    </body>
</html>
