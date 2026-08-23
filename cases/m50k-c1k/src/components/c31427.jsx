import React from 'react';
const LABEL_31427 = 'component_31427';
export function Component31427({ value = 31427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31427, 'data-value': derived.doubled }, children);
}
export default Component31427;
