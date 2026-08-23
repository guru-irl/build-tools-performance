import React from 'react';
const LABEL_29773 = 'component_29773';
export function Component29773({ value = 29773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29773, 'data-value': derived.doubled }, children);
}
export default Component29773;
