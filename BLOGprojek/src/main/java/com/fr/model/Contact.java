package com.fr.model;

import javax.persistence.*;

@Entity
@Table(name = "contacts")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "cname")
    private String cname;

    @Column(name = "phone1")
    private String phone1;

    @Column(name = "phone2")
    private String phone2;

    @Column(name = "phone3")
    private String phone3;

    @Column(name = "published")
    private boolean published;

    public Contact(String cname, String phone1, boolean b) {

    }

    public Contact(String cname, String phone1, String phone2, String phone3, boolean published) {
        this.cname = cname;
        this.phone1 = phone1;
        this.phone2 = phone2;
        this.phone3 = phone3;
        this.published = published;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public String getPhone1() {
        return phone1;
    }

    public void setPhone1(String phone1) {
        this.phone1 = phone1;
    }

    public String getPhone2() {
        return phone2;
    }

    public void setPhone2(String phone2) {
        this.phone2 = phone2;
    }

    public String getPhone3() {
        return phone3;
    }

    public void setPhone3(String phone3) {
        this.phone3 = phone3;
    }

    public boolean isPublished() {
        return published;
    }

    public void setPublished(boolean published) {
        this.published = published;
    }

    @Override
    public String toString() {
        return "Contact [id=" + id + ", cname=" + cname + ", phone1=" + phone1 + ",phone2=" + phone2 + ", phone3=" + phone3 + ", published=" + published + "]";
    }
}
