import React from 'react';
const LABEL_29525 = 'component_29525';
export function Component29525({ value = 29525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29525, 'data-value': derived.doubled }, children);
}
export default Component29525;
