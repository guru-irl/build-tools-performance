import React from 'react';
const LABEL_29274 = 'component_29274';
export function Component29274({ value = 29274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29274, 'data-value': derived.doubled }, children);
}
export default Component29274;
