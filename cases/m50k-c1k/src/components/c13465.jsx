import React from 'react';
const LABEL_13465 = 'component_13465';
export function Component13465({ value = 13465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13465, 'data-value': derived.doubled }, children);
}
export default Component13465;
