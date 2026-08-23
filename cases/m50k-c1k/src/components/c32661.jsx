import React from 'react';
const LABEL_32661 = 'component_32661';
export function Component32661({ value = 32661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32661, 'data-value': derived.doubled }, children);
}
export default Component32661;
