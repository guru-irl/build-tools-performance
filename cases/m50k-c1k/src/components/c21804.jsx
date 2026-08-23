import React from 'react';
const LABEL_21804 = 'component_21804';
export function Component21804({ value = 21804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21804, 'data-value': derived.doubled }, children);
}
export default Component21804;
