import React from 'react';
const LABEL_5825 = 'component_5825';
export function Component5825({ value = 5825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5825, 'data-value': derived.doubled }, children);
}
export default Component5825;
