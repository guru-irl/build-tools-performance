import React from 'react';
const LABEL_27774 = 'component_27774';
export function Component27774({ value = 27774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27774, 'data-value': derived.doubled }, children);
}
export default Component27774;
