import React from 'react';
const LABEL_27414 = 'component_27414';
export function Component27414({ value = 27414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27414, 'data-value': derived.doubled }, children);
}
export default Component27414;
