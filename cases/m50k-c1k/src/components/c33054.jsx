import React from 'react';
const LABEL_33054 = 'component_33054';
export function Component33054({ value = 33054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33054, 'data-value': derived.doubled }, children);
}
export default Component33054;
