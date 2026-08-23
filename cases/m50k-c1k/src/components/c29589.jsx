import React from 'react';
const LABEL_29589 = 'component_29589';
export function Component29589({ value = 29589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29589, 'data-value': derived.doubled }, children);
}
export default Component29589;
