import React from 'react';
const LABEL_43732 = 'component_43732';
export function Component43732({ value = 43732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43732, 'data-value': derived.doubled }, children);
}
export default Component43732;
