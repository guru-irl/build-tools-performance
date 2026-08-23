import React from 'react';
const LABEL_30812 = 'component_30812';
export function Component30812({ value = 30812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30812, 'data-value': derived.doubled }, children);
}
export default Component30812;
