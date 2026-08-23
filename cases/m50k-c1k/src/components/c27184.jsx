import React from 'react';
const LABEL_27184 = 'component_27184';
export function Component27184({ value = 27184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27184, 'data-value': derived.doubled }, children);
}
export default Component27184;
