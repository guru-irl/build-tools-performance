import React from 'react';
const LABEL_10393 = 'component_10393';
export function Component10393({ value = 10393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10393, 'data-value': derived.doubled }, children);
}
export default Component10393;
