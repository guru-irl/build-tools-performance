import React from 'react';
const LABEL_29206 = 'component_29206';
export function Component29206({ value = 29206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29206, 'data-value': derived.doubled }, children);
}
export default Component29206;
