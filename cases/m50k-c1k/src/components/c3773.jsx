import React from 'react';
const LABEL_3773 = 'component_3773';
export function Component3773({ value = 3773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3773, 'data-value': derived.doubled }, children);
}
export default Component3773;
