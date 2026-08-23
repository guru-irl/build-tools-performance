import React from 'react';
const LABEL_29172 = 'component_29172';
export function Component29172({ value = 29172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29172, 'data-value': derived.doubled }, children);
}
export default Component29172;
