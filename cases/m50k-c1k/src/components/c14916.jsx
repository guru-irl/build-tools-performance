import React from 'react';
const LABEL_14916 = 'component_14916';
export function Component14916({ value = 14916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14916, 'data-value': derived.doubled }, children);
}
export default Component14916;
