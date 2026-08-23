import React from 'react';
const LABEL_32976 = 'component_32976';
export function Component32976({ value = 32976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32976, 'data-value': derived.doubled }, children);
}
export default Component32976;
