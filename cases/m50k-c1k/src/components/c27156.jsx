import React from 'react';
const LABEL_27156 = 'component_27156';
export function Component27156({ value = 27156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27156, 'data-value': derived.doubled }, children);
}
export default Component27156;
