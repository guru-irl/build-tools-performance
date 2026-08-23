import React from 'react';
const LABEL_29012 = 'component_29012';
export function Component29012({ value = 29012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29012, 'data-value': derived.doubled }, children);
}
export default Component29012;
