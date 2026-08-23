import React from 'react';
const LABEL_29496 = 'component_29496';
export function Component29496({ value = 29496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29496, 'data-value': derived.doubled }, children);
}
export default Component29496;
