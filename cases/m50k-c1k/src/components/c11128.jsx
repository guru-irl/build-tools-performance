import React from 'react';
const LABEL_11128 = 'component_11128';
export function Component11128({ value = 11128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11128, 'data-value': derived.doubled }, children);
}
export default Component11128;
