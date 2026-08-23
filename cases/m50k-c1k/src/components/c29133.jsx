import React from 'react';
const LABEL_29133 = 'component_29133';
export function Component29133({ value = 29133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29133, 'data-value': derived.doubled }, children);
}
export default Component29133;
