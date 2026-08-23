import React from 'react';
const LABEL_29201 = 'component_29201';
export function Component29201({ value = 29201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29201, 'data-value': derived.doubled }, children);
}
export default Component29201;
