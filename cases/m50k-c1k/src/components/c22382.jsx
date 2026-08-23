import React from 'react';
const LABEL_22382 = 'component_22382';
export function Component22382({ value = 22382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22382, 'data-value': derived.doubled }, children);
}
export default Component22382;
