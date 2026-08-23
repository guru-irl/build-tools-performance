import React from 'react';
const LABEL_39627 = 'component_39627';
export function Component39627({ value = 39627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39627, 'data-value': derived.doubled }, children);
}
export default Component39627;
