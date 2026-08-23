import React from 'react';
const LABEL_6393 = 'component_6393';
export function Component6393({ value = 6393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6393, 'data-value': derived.doubled }, children);
}
export default Component6393;
