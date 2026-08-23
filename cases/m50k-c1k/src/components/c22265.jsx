import React from 'react';
const LABEL_22265 = 'component_22265';
export function Component22265({ value = 22265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22265, 'data-value': derived.doubled }, children);
}
export default Component22265;
