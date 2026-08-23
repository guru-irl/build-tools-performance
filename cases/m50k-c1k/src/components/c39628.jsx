import React from 'react';
const LABEL_39628 = 'component_39628';
export function Component39628({ value = 39628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39628, 'data-value': derived.doubled }, children);
}
export default Component39628;
