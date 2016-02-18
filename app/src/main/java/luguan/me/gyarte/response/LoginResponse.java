package luguan.me.gyarte.response;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Created by lulle on 12/4/2015.
 */
public class LoginResponse {
    String key = "";
    boolean loggedIn = false;
    String message = "";

    public String getKey() {
        return key;
    }

    public boolean isLoggedIn() {
        return loggedIn;
    }

    public String getMessage() {
        return message;
    }

    public static LoginResponse parseJSON(String response) {
        Gson gson = new GsonBuilder().create();
        LoginResponse loginResponse = gson.fromJson(response, LoginResponse.class);
        return loginResponse;
    }
}
