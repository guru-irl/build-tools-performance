import React from 'react';
const LABEL_27347 = 'component_27347';
export function Component27347({ value = 27347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27347, 'data-value': derived.doubled }, children);
}
export default Component27347;
