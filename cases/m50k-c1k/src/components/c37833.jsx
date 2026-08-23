import React from 'react';
const LABEL_37833 = 'component_37833';
export function Component37833({ value = 37833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37833, 'data-value': derived.doubled }, children);
}
export default Component37833;
