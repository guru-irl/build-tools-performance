import React from 'react';
const LABEL_29764 = 'component_29764';
export function Component29764({ value = 29764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29764, 'data-value': derived.doubled }, children);
}
export default Component29764;
