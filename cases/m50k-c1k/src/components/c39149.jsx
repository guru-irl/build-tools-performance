import React from 'react';
const LABEL_39149 = 'component_39149';
export function Component39149({ value = 39149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39149, 'data-value': derived.doubled }, children);
}
export default Component39149;
