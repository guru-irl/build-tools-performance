import React from 'react';
const LABEL_38002 = 'component_38002';
export function Component38002({ value = 38002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38002, 'data-value': derived.doubled }, children);
}
export default Component38002;
