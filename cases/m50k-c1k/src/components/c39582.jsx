import React from 'react';
const LABEL_39582 = 'component_39582';
export function Component39582({ value = 39582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39582, 'data-value': derived.doubled }, children);
}
export default Component39582;
