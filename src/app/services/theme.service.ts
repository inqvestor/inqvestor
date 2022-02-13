import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})


@Injectable()
export class ThemeService {

  get theme(): string   {
    return document.documentElement.getAttribute('theme') ?? 'default';
  }

  set theme(name: string ) {
    document.documentElement.setAttribute('theme', name);
  }
}
