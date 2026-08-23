import React from 'react';
const LABEL_11012 = 'component_11012';
export function Component11012({ value = 11012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11012, 'data-value': derived.doubled }, children);
}
export default Component11012;
