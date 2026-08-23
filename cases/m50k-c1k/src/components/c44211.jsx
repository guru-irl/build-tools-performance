import React from 'react';
const LABEL_44211 = 'component_44211';
export function Component44211({ value = 44211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44211, 'data-value': derived.doubled }, children);
}
export default Component44211;
