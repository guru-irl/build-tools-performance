import React from 'react';
const LABEL_17518 = 'component_17518';
export function Component17518({ value = 17518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17518, 'data-value': derived.doubled }, children);
}
export default Component17518;
