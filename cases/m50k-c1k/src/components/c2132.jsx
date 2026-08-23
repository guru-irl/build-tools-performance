import React from 'react';
const LABEL_2132 = 'component_2132';
export function Component2132({ value = 2132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2132, 'data-value': derived.doubled }, children);
}
export default Component2132;
