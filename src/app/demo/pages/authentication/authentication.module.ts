import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationRoutingModule, HttpClientModule]
})
export class AuthenticationModule {}
