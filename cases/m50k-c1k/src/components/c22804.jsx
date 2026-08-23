import React from 'react';
const LABEL_22804 = 'component_22804';
export function Component22804({ value = 22804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22804, 'data-value': derived.doubled }, children);
}
export default Component22804;
