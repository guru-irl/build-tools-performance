import React from 'react';
const LABEL_28603 = 'component_28603';
export function Component28603({ value = 28603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28603, 'data-value': derived.doubled }, children);
}
export default Component28603;
