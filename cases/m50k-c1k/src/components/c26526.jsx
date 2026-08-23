import React from 'react';
const LABEL_26526 = 'component_26526';
export function Component26526({ value = 26526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26526, 'data-value': derived.doubled }, children);
}
export default Component26526;
