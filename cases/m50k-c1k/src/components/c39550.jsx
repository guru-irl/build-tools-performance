import React from 'react';
const LABEL_39550 = 'component_39550';
export function Component39550({ value = 39550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39550, 'data-value': derived.doubled }, children);
}
export default Component39550;
