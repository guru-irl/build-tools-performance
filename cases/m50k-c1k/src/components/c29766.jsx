import React from 'react';
const LABEL_29766 = 'component_29766';
export function Component29766({ value = 29766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29766, 'data-value': derived.doubled }, children);
}
export default Component29766;
