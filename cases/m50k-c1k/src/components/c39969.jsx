import React from 'react';
const LABEL_39969 = 'component_39969';
export function Component39969({ value = 39969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39969, 'data-value': derived.doubled }, children);
}
export default Component39969;
