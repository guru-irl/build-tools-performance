import React from 'react';
const LABEL_40236 = 'component_40236';
export function Component40236({ value = 40236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40236, 'data-value': derived.doubled }, children);
}
export default Component40236;
