// routes/api.php
Route::get('/hello', function () {
    return response()->json(['message' => 'Hello from API!']);
});
