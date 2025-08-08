// main.go — Daily Fitness Tip API (Go)

package main

import (
    "encoding/json"
    "math/rand"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    tips := []string{
        "Do 15-minute bodyweight HIIT.",
        "Walk 10,000 steps a day.",
        "Stretch every morning for 5 minutes.",
    }

    json.NewEncoder(w).Encode(map[string]string{
        "tip": tips[rand.Intn(len(tips))],
    })
}

func main() {
    http.HandleFunc("/api/fitness", handler)
    http.ListenAndServe(":5003", nil)
}
