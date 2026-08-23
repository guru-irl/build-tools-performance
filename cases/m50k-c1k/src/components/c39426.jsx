import React from 'react';
const LABEL_39426 = 'component_39426';
export function Component39426({ value = 39426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39426, 'data-value': derived.doubled }, children);
}
export default Component39426;
