import React from 'react';
const LABEL_29754 = 'component_29754';
export function Component29754({ value = 29754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29754, 'data-value': derived.doubled }, children);
}
export default Component29754;
