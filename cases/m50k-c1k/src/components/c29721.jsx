import React from 'react';
const LABEL_29721 = 'component_29721';
export function Component29721({ value = 29721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29721, 'data-value': derived.doubled }, children);
}
export default Component29721;
