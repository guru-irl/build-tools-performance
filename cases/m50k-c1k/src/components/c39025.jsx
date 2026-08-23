import React from 'react';
const LABEL_39025 = 'component_39025';
export function Component39025({ value = 39025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39025, 'data-value': derived.doubled }, children);
}
export default Component39025;
