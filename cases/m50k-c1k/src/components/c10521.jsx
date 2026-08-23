import React from 'react';
const LABEL_10521 = 'component_10521';
export function Component10521({ value = 10521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10521, 'data-value': derived.doubled }, children);
}
export default Component10521;
