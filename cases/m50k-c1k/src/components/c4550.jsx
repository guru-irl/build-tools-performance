import React from 'react';
const LABEL_4550 = 'component_4550';
export function Component4550({ value = 4550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4550, 'data-value': derived.doubled }, children);
}
export default Component4550;
