import React from 'react';
const LABEL_35976 = 'component_35976';
export function Component35976({ value = 35976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35976, 'data-value': derived.doubled }, children);
}
export default Component35976;
