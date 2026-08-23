import React from 'react';
const LABEL_37197 = 'component_37197';
export function Component37197({ value = 37197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37197, 'data-value': derived.doubled }, children);
}
export default Component37197;
