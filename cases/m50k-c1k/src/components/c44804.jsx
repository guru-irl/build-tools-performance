import React from 'react';
const LABEL_44804 = 'component_44804';
export function Component44804({ value = 44804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44804, 'data-value': derived.doubled }, children);
}
export default Component44804;
