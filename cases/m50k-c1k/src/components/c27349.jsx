import React from 'react';
const LABEL_27349 = 'component_27349';
export function Component27349({ value = 27349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27349, 'data-value': derived.doubled }, children);
}
export default Component27349;
