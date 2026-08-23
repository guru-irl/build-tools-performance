import React from 'react';
const LABEL_27455 = 'component_27455';
export function Component27455({ value = 27455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27455, 'data-value': derived.doubled }, children);
}
export default Component27455;
