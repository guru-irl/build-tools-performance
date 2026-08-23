import React from 'react';
const LABEL_34804 = 'component_34804';
export function Component34804({ value = 34804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34804, 'data-value': derived.doubled }, children);
}
export default Component34804;
