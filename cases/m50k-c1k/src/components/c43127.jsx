import React from 'react';
const LABEL_43127 = 'component_43127';
export function Component43127({ value = 43127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43127, 'data-value': derived.doubled }, children);
}
export default Component43127;
