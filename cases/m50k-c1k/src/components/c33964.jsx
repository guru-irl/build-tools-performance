import React from 'react';
const LABEL_33964 = 'component_33964';
export function Component33964({ value = 33964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33964, 'data-value': derived.doubled }, children);
}
export default Component33964;
