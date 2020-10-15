#include <stdio.h>
#include <stdlib.h>
#include <math.h>

typedef struct Coordenada {
  int x, y; 
} Coordenada;

Coordenada * newCoordenada(int x,int y){
  Coordenada * aux = (Coordenada *)malloc(sizeof(Coordenada));
  aux->x = x;
  aux->y = y;
  return aux;
}

void printCoordenada(Coordenada *c){
  printf("(%d, %d)", c->x, c->y);
}

double eucliDist(Coordenada *a, Coordenada *b) {
  double dx = (a->x) - (b->x);
  double dy = (a->y) - (b->y);
  return sqrt(dx * dx + dy * dy);
}

typedef struct Segmento {
  Coordenada *ini,*fim;
} Segmento;

Segmento * newSegmento(Coordenada *ini, Coordenada *fim) {
  Segmento * aux = (Segmento *)malloc(sizeof(Segmento));
  aux->ini = newCoordenada(ini->x, ini->y);
  aux->fim = newCoordenada(fim->x, fim->y);
  return aux;
}

void printSegmento(Segmento *s) {
  printf("[");
  printCoordenada(s->ini);
  printCoordenada(s->fim);
  printf("]\n");
}

double comprimento(Segmento *s) {
  return eucliDist(s->ini, s->fim);
}

Coordenada * interseccao(Segmento *a, Segmento *b) {
  Coordenada * inter = NULL;
  return inter;
}

typedef struct Poligono {
  Coordenada * v[100];
  int top;
}Poligono;

Poligono * newPoligono(){
  Poligono * aux = (Poligono *)malloc(sizeof(Poligono));
  aux->top = 0;
  return aux;
}

void addCoord(Poligono *p, Coordenada *c) {
  p->v[p->top++] = c;
}

void printPoligono(Poligono *p) {
  printf("[");
  for(int i = 0; i < p->top ; i++){
    printCoordenada(p->v[i]);
  }
  printf("]\n");
}

double perimetro(Poligono *p) {
  double per = 0;
  for(int i = 0; i < p->top - 1; i++){
    per += eucliDist(p->v[i], p->v[i+1]);
  }
  return per;
}

#define preto 1
#define branco 0

typedef struct Imagem{
  int **m;
  int larg, alt;
} Imagem;

Imagem * newImage(int larg, int alt) {
  Imagem * aux=(Imagem *)malloc(sizeof(Imagem));
  aux->m = (int **)malloc(sizeof(int *)*alt);
  for(int li=0;li<alt;li++) {
    aux->m[li] = (int *)malloc(sizeof(int)*larg);
    for(int co=0;co<larg;co++) {
      aux->m[li][co]=branco;
    }
  }
  aux->alt = alt;
  aux->larg = larg;
  return aux;
}

void printImg(Imagem * img) {
  printf("%d %d\n", img->larg, img->alt);
  for(int linha = img->alt-1; linha>=0; linha--) {
    for(int col = 0; col< img->larg; col++){
      printf("%d ", img->m[linha][col]);
    }
    printf("\n");
  }
}

void set(Imagem *img,int li,int col,int cor) {
    if(li >= 0 &&col >= 0 && li< img->alt && col < img->larg) {
      img->m[li][col] = cor;
    }
}

void writeFile(Imagem *img,char * fname){
    FILE * fp;
    fp = fopen(fname, "w+");
    fprintf(fp, "P1\n");
    fprintf(fp, "%d %d\n", img->larg, img->alt);
    for(int linha = img->alt - 1; linha >= 0; linha--) {
      for(int col = 0; col < img->larg; col++){
        fprintf(fp,"%d ", img->m[linha][col]);
      }
      fprintf(fp,"\n");
    }
    fclose(fp);
}

int main(){
    int largura = 600;
    int altura = 400;
    
    Imagem * img = newImage(largura,altura);
    int li;
    int col;
    int cor = preto;
    int recuo = 100;
    for(li = recuo; li < altura - recuo; li++) {
      for(col = recuo; col < largura-recuo; col++) {
        set(img, li, col, cor);
      }
    }
    
    printImg(img);
    writeFile(img, "Teste.txt");
    writeFile(img, "Teste.pbm");            
}