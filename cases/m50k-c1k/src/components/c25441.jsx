import React from 'react';
const LABEL_25441 = 'component_25441';
export function Component25441({ value = 25441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25441, 'data-value': derived.doubled }, children);
}
export default Component25441;
