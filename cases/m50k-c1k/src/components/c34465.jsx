import React from 'react';
const LABEL_34465 = 'component_34465';
export function Component34465({ value = 34465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34465, 'data-value': derived.doubled }, children);
}
export default Component34465;
