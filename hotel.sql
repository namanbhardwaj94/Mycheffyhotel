PGDMP     7                     z            try    12.7    12.7                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    25916    try    DATABASE     ?   CREATE DATABASE try WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE try;
                postgres    false            ?            1259    26927    Image    TABLE     ?   CREATE TABLE public."Image" (
    id text NOT NULL,
    "hotelId" text,
    asset_id text NOT NULL,
    public_id text NOT NULL,
    url text NOT NULL,
    secure_url text NOT NULL
);
    DROP TABLE public."Image";
       public         heap    postgres    false                      0    26927    Image 
   TABLE DATA           V   COPY public."Image" (id, "hotelId", asset_id, public_id, url, secure_url) FROM stdin;
    public          postgres    false    205   -       ?
           2606    26934    Image Image_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Image" DROP CONSTRAINT "Image_pkey";
       public            postgres    false    205            ?
           2606    26951    Image Image_hotelId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Image"
    ADD CONSTRAINT "Image_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES public.hotel(id) ON UPDATE CASCADE ON DELETE CASCADE;
 F   ALTER TABLE ONLY public."Image" DROP CONSTRAINT "Image_hotelId_fkey";
       public          postgres    false    205               ?   x?U?I?? D?x??Ϥx??8T?PP
??o??t??e??????f?@?nq?#x}?`v4?f?? 47?????E8??M??F????=??qWm9F?En4W??D$e??m? x??ä?Hb?5????p}? b)aM????????-???ʱ	0./???????|d??v?8?	??ET?m^
?r?MD??6?<_??%???[o?Y?X?9.????S?3???4M?#	}I     