import React from 'react';
const LABEL_2692 = 'component_2692';
export function Component2692({ value = 2692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2692, 'data-value': derived.doubled }, children);
}
export default Component2692;
