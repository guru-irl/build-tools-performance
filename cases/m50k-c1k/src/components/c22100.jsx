import React from 'react';
const LABEL_22100 = 'component_22100';
export function Component22100({ value = 22100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22100, 'data-value': derived.doubled }, children);
}
export default Component22100;
