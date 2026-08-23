import React from 'react';
const LABEL_8278 = 'component_8278';
export function Component8278({ value = 8278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8278, 'data-value': derived.doubled }, children);
}
export default Component8278;
