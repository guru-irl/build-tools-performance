import React from 'react';
const LABEL_29474 = 'component_29474';
export function Component29474({ value = 29474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29474, 'data-value': derived.doubled }, children);
}
export default Component29474;
