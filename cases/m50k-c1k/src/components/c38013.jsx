import React from 'react';
const LABEL_38013 = 'component_38013';
export function Component38013({ value = 38013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38013, 'data-value': derived.doubled }, children);
}
export default Component38013;
