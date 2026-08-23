import React from 'react';
const LABEL_27922 = 'component_27922';
export function Component27922({ value = 27922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27922, 'data-value': derived.doubled }, children);
}
export default Component27922;
