import React from 'react';
const LABEL_35318 = 'component_35318';
export function Component35318({ value = 35318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35318, 'data-value': derived.doubled }, children);
}
export default Component35318;
