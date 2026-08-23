import React from 'react';
const LABEL_15427 = 'component_15427';
export function Component15427({ value = 15427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15427, 'data-value': derived.doubled }, children);
}
export default Component15427;
