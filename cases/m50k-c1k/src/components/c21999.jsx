import React from 'react';
const LABEL_21999 = 'component_21999';
export function Component21999({ value = 21999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21999, 'data-value': derived.doubled }, children);
}
export default Component21999;
