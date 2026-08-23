import React from 'react';
const LABEL_10694 = 'component_10694';
export function Component10694({ value = 10694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10694, 'data-value': derived.doubled }, children);
}
export default Component10694;
