import React from 'react';
const LABEL_43046 = 'component_43046';
export function Component43046({ value = 43046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43046, 'data-value': derived.doubled }, children);
}
export default Component43046;
