import React from 'react';
const LABEL_10628 = 'component_10628';
export function Component10628({ value = 10628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10628, 'data-value': derived.doubled }, children);
}
export default Component10628;
