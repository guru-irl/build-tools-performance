import React from 'react';
const LABEL_15773 = 'component_15773';
export function Component15773({ value = 15773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15773, 'data-value': derived.doubled }, children);
}
export default Component15773;
