import React from 'react';
const LABEL_11596 = 'component_11596';
export function Component11596({ value = 11596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11596, 'data-value': derived.doubled }, children);
}
export default Component11596;
