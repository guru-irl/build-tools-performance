import React from 'react';
const LABEL_27904 = 'component_27904';
export function Component27904({ value = 27904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27904, 'data-value': derived.doubled }, children);
}
export default Component27904;
