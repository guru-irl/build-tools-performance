import React from 'react';
const LABEL_27640 = 'component_27640';
export function Component27640({ value = 27640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27640, 'data-value': derived.doubled }, children);
}
export default Component27640;
