import React from 'react';
const LABEL_26145 = 'component_26145';
export function Component26145({ value = 26145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26145, 'data-value': derived.doubled }, children);
}
export default Component26145;
