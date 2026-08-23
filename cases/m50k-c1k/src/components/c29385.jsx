import React from 'react';
const LABEL_29385 = 'component_29385';
export function Component29385({ value = 29385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29385, 'data-value': derived.doubled }, children);
}
export default Component29385;
