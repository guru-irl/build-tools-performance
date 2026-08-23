import React from 'react';
const LABEL_32825 = 'component_32825';
export function Component32825({ value = 32825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32825, 'data-value': derived.doubled }, children);
}
export default Component32825;
