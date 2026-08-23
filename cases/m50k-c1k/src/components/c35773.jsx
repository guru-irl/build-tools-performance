import React from 'react';
const LABEL_35773 = 'component_35773';
export function Component35773({ value = 35773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35773, 'data-value': derived.doubled }, children);
}
export default Component35773;
