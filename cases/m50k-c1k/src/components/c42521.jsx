import React from 'react';
const LABEL_42521 = 'component_42521';
export function Component42521({ value = 42521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42521, 'data-value': derived.doubled }, children);
}
export default Component42521;
