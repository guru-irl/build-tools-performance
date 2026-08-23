import React from 'react';
const LABEL_19465 = 'component_19465';
export function Component19465({ value = 19465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19465, 'data-value': derived.doubled }, children);
}
export default Component19465;
