import React from 'react';
const LABEL_29071 = 'component_29071';
export function Component29071({ value = 29071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29071, 'data-value': derived.doubled }, children);
}
export default Component29071;
