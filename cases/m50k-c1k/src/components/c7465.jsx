import React from 'react';
const LABEL_7465 = 'component_7465';
export function Component7465({ value = 7465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7465, 'data-value': derived.doubled }, children);
}
export default Component7465;
