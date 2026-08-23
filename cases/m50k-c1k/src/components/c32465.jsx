import React from 'react';
const LABEL_32465 = 'component_32465';
export function Component32465({ value = 32465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32465, 'data-value': derived.doubled }, children);
}
export default Component32465;
