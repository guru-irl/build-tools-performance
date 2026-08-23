import React from 'react';
const LABEL_29975 = 'component_29975';
export function Component29975({ value = 29975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29975, 'data-value': derived.doubled }, children);
}
export default Component29975;
