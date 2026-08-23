import React from 'react';
const LABEL_2432 = 'component_2432';
export function Component2432({ value = 2432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2432, 'data-value': derived.doubled }, children);
}
export default Component2432;
