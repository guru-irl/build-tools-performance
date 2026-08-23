import React from 'react';
const LABEL_36393 = 'component_36393';
export function Component36393({ value = 36393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36393, 'data-value': derived.doubled }, children);
}
export default Component36393;
