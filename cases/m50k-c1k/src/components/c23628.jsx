import React from 'react';
const LABEL_23628 = 'component_23628';
export function Component23628({ value = 23628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23628, 'data-value': derived.doubled }, children);
}
export default Component23628;
