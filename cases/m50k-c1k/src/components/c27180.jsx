import React from 'react';
const LABEL_27180 = 'component_27180';
export function Component27180({ value = 27180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27180, 'data-value': derived.doubled }, children);
}
export default Component27180;
