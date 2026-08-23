import React from 'react';
const LABEL_11625 = 'component_11625';
export function Component11625({ value = 11625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11625, 'data-value': derived.doubled }, children);
}
export default Component11625;
