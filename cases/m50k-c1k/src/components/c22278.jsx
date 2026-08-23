import React from 'react';
const LABEL_22278 = 'component_22278';
export function Component22278({ value = 22278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22278, 'data-value': derived.doubled }, children);
}
export default Component22278;
