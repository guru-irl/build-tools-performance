import React from 'react';
const LABEL_44758 = 'component_44758';
export function Component44758({ value = 44758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44758, 'data-value': derived.doubled }, children);
}
export default Component44758;
