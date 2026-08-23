import React from 'react';
const LABEL_39017 = 'component_39017';
export function Component39017({ value = 39017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39017, 'data-value': derived.doubled }, children);
}
export default Component39017;
