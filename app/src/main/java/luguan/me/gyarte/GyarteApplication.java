package luguan.me.gyarte;

import android.app.Application;

/**
 * Created by lulle on 12/8/2015.
 */
public class GyarteApplication extends Application{

    private static GyarteApplication instance;
    private API apiInstance;

    private String key;

    public API getApiInstance() {
        return apiInstance;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getKey() {

        return key;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        instance = this;
        apiInstance = new API();

    }


    public static GyarteApplication getInstance() {
        return instance;
    }
}
