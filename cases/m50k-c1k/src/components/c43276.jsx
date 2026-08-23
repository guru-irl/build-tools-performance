import React from 'react';
const LABEL_43276 = 'component_43276';
export function Component43276({ value = 43276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43276, 'data-value': derived.doubled }, children);
}
export default Component43276;
