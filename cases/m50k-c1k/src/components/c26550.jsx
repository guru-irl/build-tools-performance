import React from 'react';
const LABEL_26550 = 'component_26550';
export function Component26550({ value = 26550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26550, 'data-value': derived.doubled }, children);
}
export default Component26550;
