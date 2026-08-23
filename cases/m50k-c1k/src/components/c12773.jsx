import React from 'react';
const LABEL_12773 = 'component_12773';
export function Component12773({ value = 12773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12773, 'data-value': derived.doubled }, children);
}
export default Component12773;
