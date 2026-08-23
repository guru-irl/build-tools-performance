import React from 'react';
const LABEL_21550 = 'component_21550';
export function Component21550({ value = 21550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21550, 'data-value': derived.doubled }, children);
}
export default Component21550;
