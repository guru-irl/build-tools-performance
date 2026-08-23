import React from 'react';
const LABEL_26773 = 'component_26773';
export function Component26773({ value = 26773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26773, 'data-value': derived.doubled }, children);
}
export default Component26773;
