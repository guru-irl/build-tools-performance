import React from 'react';
const LABEL_29435 = 'component_29435';
export function Component29435({ value = 29435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29435, 'data-value': derived.doubled }, children);
}
export default Component29435;
