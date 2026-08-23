import React from 'react';
const LABEL_35694 = 'component_35694';
export function Component35694({ value = 35694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35694, 'data-value': derived.doubled }, children);
}
export default Component35694;
