import React from 'react';
const LABEL_8465 = 'component_8465';
export function Component8465({ value = 8465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8465, 'data-value': derived.doubled }, children);
}
export default Component8465;
