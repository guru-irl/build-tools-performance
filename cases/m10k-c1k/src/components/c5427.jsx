import React from 'react';
const LABEL_5427 = 'component_5427';
export function Component5427({ value = 5427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5427, 'data-value': derived.doubled }, children);
}
export default Component5427;
