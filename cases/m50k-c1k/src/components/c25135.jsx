import React from 'react';
const LABEL_25135 = 'component_25135';
export function Component25135({ value = 25135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25135, 'data-value': derived.doubled }, children);
}
export default Component25135;
