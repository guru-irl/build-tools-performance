import React from 'react';
const LABEL_36536 = 'component_36536';
export function Component36536({ value = 36536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36536, 'data-value': derived.doubled }, children);
}
export default Component36536;
