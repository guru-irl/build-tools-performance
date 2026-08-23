import React from 'react';
const LABEL_6976 = 'component_6976';
export function Component6976({ value = 6976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6976, 'data-value': derived.doubled }, children);
}
export default Component6976;
