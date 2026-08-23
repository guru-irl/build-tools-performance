import React from 'react';
const LABEL_42661 = 'component_42661';
export function Component42661({ value = 42661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42661, 'data-value': derived.doubled }, children);
}
export default Component42661;
