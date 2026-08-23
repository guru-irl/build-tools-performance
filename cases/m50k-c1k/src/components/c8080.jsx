import React from 'react';
const LABEL_8080 = 'component_8080';
export function Component8080({ value = 8080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8080, 'data-value': derived.doubled }, children);
}
export default Component8080;
