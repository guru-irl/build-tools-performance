import React from 'react';
const LABEL_5833 = 'component_5833';
export function Component5833({ value = 5833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5833, 'data-value': derived.doubled }, children);
}
export default Component5833;
