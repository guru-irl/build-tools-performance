import React from 'react';
const LABEL_29953 = 'component_29953';
export function Component29953({ value = 29953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29953, 'data-value': derived.doubled }, children);
}
export default Component29953;
