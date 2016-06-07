package luguan.me.gyarte.response;

import com.google.gson.annotations.SerializedName;

/**
 * Created by Lukas on 5/7/2016.
 */

public class Pupil {
    String id = "";
    String telephone = "";
    String name = "";
    @SerializedName("class")
    String pupilClass = "";

    public String getPupilClass() {
        return pupilClass;
    }

    public String getTelephone() {

        return telephone;
    }

    public String getId() {

        return id;
    }

    public String getName() {

        return name;
    }
}
