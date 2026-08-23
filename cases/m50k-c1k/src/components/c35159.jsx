import React from 'react';
const LABEL_35159 = 'component_35159';
export function Component35159({ value = 35159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35159, 'data-value': derived.doubled }, children);
}
export default Component35159;
