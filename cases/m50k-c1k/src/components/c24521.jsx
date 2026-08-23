import React from 'react';
const LABEL_24521 = 'component_24521';
export function Component24521({ value = 24521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24521, 'data-value': derived.doubled }, children);
}
export default Component24521;
