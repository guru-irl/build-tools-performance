import React from 'react';
const LABEL_16427 = 'component_16427';
export function Component16427({ value = 16427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16427, 'data-value': derived.doubled }, children);
}
export default Component16427;
