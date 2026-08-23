import React from 'react';
const LABEL_27937 = 'component_27937';
export function Component27937({ value = 27937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27937, 'data-value': derived.doubled }, children);
}
export default Component27937;
