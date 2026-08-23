import React from 'react';
const LABEL_6465 = 'component_6465';
export function Component6465({ value = 6465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6465, 'data-value': derived.doubled }, children);
}
export default Component6465;
