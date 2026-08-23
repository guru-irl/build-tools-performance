import React from 'react';
const LABEL_31080 = 'component_31080';
export function Component31080({ value = 31080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31080, 'data-value': derived.doubled }, children);
}
export default Component31080;
