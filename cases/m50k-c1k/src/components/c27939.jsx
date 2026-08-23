import React from 'react';
const LABEL_27939 = 'component_27939';
export function Component27939({ value = 27939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27939, 'data-value': derived.doubled }, children);
}
export default Component27939;
