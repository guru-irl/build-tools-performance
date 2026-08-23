import React from 'react';
const LABEL_29521 = 'component_29521';
export function Component29521({ value = 29521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29521, 'data-value': derived.doubled }, children);
}
export default Component29521;
