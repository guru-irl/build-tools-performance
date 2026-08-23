import React from 'react';
const LABEL_39517 = 'component_39517';
export function Component39517({ value = 39517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39517, 'data-value': derived.doubled }, children);
}
export default Component39517;
