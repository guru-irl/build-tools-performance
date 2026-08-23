import React from 'react';
const LABEL_661 = 'component_661';
export function Component661({ value = 661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_661, 'data-value': derived.doubled }, children);
}
export default Component661;
