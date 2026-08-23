import React from 'react';
const LABEL_7393 = 'component_7393';
export function Component7393({ value = 7393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7393, 'data-value': derived.doubled }, children);
}
export default Component7393;
