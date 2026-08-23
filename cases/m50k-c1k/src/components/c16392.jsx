import React from 'react';
const LABEL_16392 = 'component_16392';
export function Component16392({ value = 16392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16392, 'data-value': derived.doubled }, children);
}
export default Component16392;
