import React from 'react';
const LABEL_7539 = 'component_7539';
export function Component7539({ value = 7539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7539, 'data-value': derived.doubled }, children);
}
export default Component7539;
