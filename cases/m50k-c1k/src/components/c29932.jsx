import React from 'react';
const LABEL_29932 = 'component_29932';
export function Component29932({ value = 29932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29932, 'data-value': derived.doubled }, children);
}
export default Component29932;
