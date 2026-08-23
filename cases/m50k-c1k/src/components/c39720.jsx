import React from 'react';
const LABEL_39720 = 'component_39720';
export function Component39720({ value = 39720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39720, 'data-value': derived.doubled }, children);
}
export default Component39720;
