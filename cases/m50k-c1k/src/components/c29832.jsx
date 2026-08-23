import React from 'react';
const LABEL_29832 = 'component_29832';
export function Component29832({ value = 29832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29832, 'data-value': derived.doubled }, children);
}
export default Component29832;
