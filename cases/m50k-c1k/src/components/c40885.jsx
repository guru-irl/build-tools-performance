import React from 'react';
const LABEL_40885 = 'component_40885';
export function Component40885({ value = 40885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40885, 'data-value': derived.doubled }, children);
}
export default Component40885;
