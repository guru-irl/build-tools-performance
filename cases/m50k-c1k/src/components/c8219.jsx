import React from 'react';
const LABEL_8219 = 'component_8219';
export function Component8219({ value = 8219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8219, 'data-value': derived.doubled }, children);
}
export default Component8219;
