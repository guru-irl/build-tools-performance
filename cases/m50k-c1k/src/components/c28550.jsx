import React from 'react';
const LABEL_28550 = 'component_28550';
export function Component28550({ value = 28550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28550, 'data-value': derived.doubled }, children);
}
export default Component28550;
