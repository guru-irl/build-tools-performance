import React from 'react';
const LABEL_23661 = 'component_23661';
export function Component23661({ value = 23661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23661, 'data-value': derived.doubled }, children);
}
export default Component23661;
