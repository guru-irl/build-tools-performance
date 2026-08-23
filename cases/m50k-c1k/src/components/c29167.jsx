import React from 'react';
const LABEL_29167 = 'component_29167';
export function Component29167({ value = 29167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29167, 'data-value': derived.doubled }, children);
}
export default Component29167;
