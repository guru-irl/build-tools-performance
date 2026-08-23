import React from 'react';
const LABEL_773 = 'component_773';
export function Component773({ value = 773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_773, 'data-value': derived.doubled }, children);
}
export default Component773;
