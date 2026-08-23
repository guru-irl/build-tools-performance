import React from 'react';
const LABEL_8661 = 'component_8661';
export function Component8661({ value = 8661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8661, 'data-value': derived.doubled }, children);
}
export default Component8661;
