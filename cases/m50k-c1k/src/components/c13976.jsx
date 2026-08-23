import React from 'react';
const LABEL_13976 = 'component_13976';
export function Component13976({ value = 13976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13976, 'data-value': derived.doubled }, children);
}
export default Component13976;
