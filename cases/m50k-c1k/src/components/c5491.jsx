import React from 'react';
const LABEL_5491 = 'component_5491';
export function Component5491({ value = 5491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5491, 'data-value': derived.doubled }, children);
}
export default Component5491;
