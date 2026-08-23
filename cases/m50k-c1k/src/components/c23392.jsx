import React from 'react';
const LABEL_23392 = 'component_23392';
export function Component23392({ value = 23392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23392, 'data-value': derived.doubled }, children);
}
export default Component23392;
