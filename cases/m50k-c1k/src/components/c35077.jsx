import React from 'react';
const LABEL_35077 = 'component_35077';
export function Component35077({ value = 35077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35077, 'data-value': derived.doubled }, children);
}
export default Component35077;
