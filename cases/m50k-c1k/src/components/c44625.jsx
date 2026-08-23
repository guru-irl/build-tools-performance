import React from 'react';
const LABEL_44625 = 'component_44625';
export function Component44625({ value = 44625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44625, 'data-value': derived.doubled }, children);
}
export default Component44625;
