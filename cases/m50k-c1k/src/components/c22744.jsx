import React from 'react';
const LABEL_22744 = 'component_22744';
export function Component22744({ value = 22744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22744, 'data-value': derived.doubled }, children);
}
export default Component22744;
