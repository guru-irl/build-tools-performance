import React from 'react';
const LABEL_2102 = 'component_2102';
export function Component2102({ value = 2102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2102, 'data-value': derived.doubled }, children);
}
export default Component2102;
