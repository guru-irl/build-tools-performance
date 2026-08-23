import React from 'react';
const LABEL_21385 = 'component_21385';
export function Component21385({ value = 21385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21385, 'data-value': derived.doubled }, children);
}
export default Component21385;
