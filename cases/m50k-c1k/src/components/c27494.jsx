import React from 'react';
const LABEL_27494 = 'component_27494';
export function Component27494({ value = 27494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27494, 'data-value': derived.doubled }, children);
}
export default Component27494;
