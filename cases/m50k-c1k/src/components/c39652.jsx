import React from 'react';
const LABEL_39652 = 'component_39652';
export function Component39652({ value = 39652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39652, 'data-value': derived.doubled }, children);
}
export default Component39652;
