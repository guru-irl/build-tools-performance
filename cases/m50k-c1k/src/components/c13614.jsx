import React from 'react';
const LABEL_13614 = 'component_13614';
export function Component13614({ value = 13614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13614, 'data-value': derived.doubled }, children);
}
export default Component13614;
