import React from 'react';
const LABEL_27279 = 'component_27279';
export function Component27279({ value = 27279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27279, 'data-value': derived.doubled }, children);
}
export default Component27279;
