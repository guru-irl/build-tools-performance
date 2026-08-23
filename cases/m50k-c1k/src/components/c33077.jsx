import React from 'react';
const LABEL_33077 = 'component_33077';
export function Component33077({ value = 33077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33077, 'data-value': derived.doubled }, children);
}
export default Component33077;
