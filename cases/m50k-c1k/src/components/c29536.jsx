import React from 'react';
const LABEL_29536 = 'component_29536';
export function Component29536({ value = 29536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29536, 'data-value': derived.doubled }, children);
}
export default Component29536;
