import React from 'react';
const LABEL_27234 = 'component_27234';
export function Component27234({ value = 27234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27234, 'data-value': derived.doubled }, children);
}
export default Component27234;
