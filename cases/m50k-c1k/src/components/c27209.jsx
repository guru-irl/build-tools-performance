import React from 'react';
const LABEL_27209 = 'component_27209';
export function Component27209({ value = 27209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27209, 'data-value': derived.doubled }, children);
}
export default Component27209;
