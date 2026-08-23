import React from 'react';
const LABEL_36521 = 'component_36521';
export function Component36521({ value = 36521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36521, 'data-value': derived.doubled }, children);
}
export default Component36521;
