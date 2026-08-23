import React from 'react';
const LABEL_21777 = 'component_21777';
export function Component21777({ value = 21777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21777, 'data-value': derived.doubled }, children);
}
export default Component21777;
