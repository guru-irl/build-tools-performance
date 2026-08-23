import React from 'react';
const LABEL_20392 = 'component_20392';
export function Component20392({ value = 20392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20392, 'data-value': derived.doubled }, children);
}
export default Component20392;
