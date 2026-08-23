import React from 'react';
const LABEL_43494 = 'component_43494';
export function Component43494({ value = 43494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43494, 'data-value': derived.doubled }, children);
}
export default Component43494;
