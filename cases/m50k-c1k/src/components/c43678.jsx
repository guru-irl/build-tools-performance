import React from 'react';
const LABEL_43678 = 'component_43678';
export function Component43678({ value = 43678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43678, 'data-value': derived.doubled }, children);
}
export default Component43678;
