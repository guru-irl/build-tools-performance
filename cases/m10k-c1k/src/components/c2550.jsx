import React from 'react';
const LABEL_2550 = 'component_2550';
export function Component2550({ value = 2550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2550, 'data-value': derived.doubled }, children);
}
export default Component2550;
