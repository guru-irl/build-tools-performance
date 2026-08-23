import React from 'react';
const LABEL_29255 = 'component_29255';
export function Component29255({ value = 29255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29255, 'data-value': derived.doubled }, children);
}
export default Component29255;
