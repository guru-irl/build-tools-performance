import React from 'react';
const LABEL_10040 = 'component_10040';
export function Component10040({ value = 10040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10040, 'data-value': derived.doubled }, children);
}
export default Component10040;
