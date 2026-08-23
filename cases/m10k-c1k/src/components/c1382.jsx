import React from 'react';
const LABEL_1382 = 'component_1382';
export function Component1382({ value = 1382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1382, 'data-value': derived.doubled }, children);
}
export default Component1382;
