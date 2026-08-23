import React from 'react';
const LABEL_35362 = 'component_35362';
export function Component35362({ value = 35362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35362, 'data-value': derived.doubled }, children);
}
export default Component35362;
