import React from 'react';
const LABEL_26012 = 'component_26012';
export function Component26012({ value = 26012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26012, 'data-value': derived.doubled }, children);
}
export default Component26012;
