import React from 'react';
const LABEL_26875 = 'component_26875';
export function Component26875({ value = 26875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26875, 'data-value': derived.doubled }, children);
}
export default Component26875;
