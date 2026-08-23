import React from 'react';
const LABEL_20825 = 'component_20825';
export function Component20825({ value = 20825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20825, 'data-value': derived.doubled }, children);
}
export default Component20825;
