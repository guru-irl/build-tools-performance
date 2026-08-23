import React from 'react';
const LABEL_6664 = 'component_6664';
export function Component6664({ value = 6664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6664, 'data-value': derived.doubled }, children);
}
export default Component6664;
