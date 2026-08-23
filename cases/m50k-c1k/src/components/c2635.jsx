import React from 'react';
const LABEL_2635 = 'component_2635';
export function Component2635({ value = 2635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2635, 'data-value': derived.doubled }, children);
}
export default Component2635;
