import React from 'react';
const LABEL_24773 = 'component_24773';
export function Component24773({ value = 24773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24773, 'data-value': derived.doubled }, children);
}
export default Component24773;
