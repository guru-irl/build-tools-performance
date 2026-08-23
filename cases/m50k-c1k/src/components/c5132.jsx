import React from 'react';
const LABEL_5132 = 'component_5132';
export function Component5132({ value = 5132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5132, 'data-value': derived.doubled }, children);
}
export default Component5132;
