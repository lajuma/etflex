import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';


export function highlightText([value, filter]) {
  const regex = new RegExp(filter, 'gi');
  const output = value.replace(regex, '<span class="highlight">$&</span>');
  return htmlSafe(output);
}

export default helper(highlightText);
