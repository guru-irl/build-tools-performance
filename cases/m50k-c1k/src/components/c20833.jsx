import React from 'react';
const LABEL_20833 = 'component_20833';
export function Component20833({ value = 20833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20833, 'data-value': derived.doubled }, children);
}
export default Component20833;
