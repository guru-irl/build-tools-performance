import React from 'react';
const LABEL_29481 = 'component_29481';
export function Component29481({ value = 29481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29481, 'data-value': derived.doubled }, children);
}
export default Component29481;
