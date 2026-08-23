import React from 'react';
const LABEL_8243 = 'component_8243';
export function Component8243({ value = 8243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8243, 'data-value': derived.doubled }, children);
}
export default Component8243;
