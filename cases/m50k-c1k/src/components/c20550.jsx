import React from 'react';
const LABEL_20550 = 'component_20550';
export function Component20550({ value = 20550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20550, 'data-value': derived.doubled }, children);
}
export default Component20550;
