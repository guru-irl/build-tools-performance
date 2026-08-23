import React from 'react';
const LABEL_23393 = 'component_23393';
export function Component23393({ value = 23393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23393, 'data-value': derived.doubled }, children);
}
export default Component23393;
