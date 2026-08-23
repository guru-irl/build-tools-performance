import React from 'react';
const LABEL_33385 = 'component_33385';
export function Component33385({ value = 33385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33385, 'data-value': derived.doubled }, children);
}
export default Component33385;
