import React from 'react';
const LABEL_27307 = 'component_27307';
export function Component27307({ value = 27307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27307, 'data-value': derived.doubled }, children);
}
export default Component27307;
