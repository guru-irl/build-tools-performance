import React from 'react';
const LABEL_7521 = 'component_7521';
export function Component7521({ value = 7521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7521, 'data-value': derived.doubled }, children);
}
export default Component7521;
