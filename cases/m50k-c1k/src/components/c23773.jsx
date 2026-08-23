import React from 'react';
const LABEL_23773 = 'component_23773';
export function Component23773({ value = 23773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23773, 'data-value': derived.doubled }, children);
}
export default Component23773;
