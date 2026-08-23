import React from 'react';
const LABEL_42803 = 'component_42803';
export function Component42803({ value = 42803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42803, 'data-value': derived.doubled }, children);
}
export default Component42803;
