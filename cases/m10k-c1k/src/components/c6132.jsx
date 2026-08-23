import React from 'react';
const LABEL_6132 = 'component_6132';
export function Component6132({ value = 6132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6132, 'data-value': derived.doubled }, children);
}
export default Component6132;
