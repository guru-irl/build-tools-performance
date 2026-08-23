import React from 'react';
const LABEL_8435 = 'component_8435';
export function Component8435({ value = 8435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8435, 'data-value': derived.doubled }, children);
}
export default Component8435;
