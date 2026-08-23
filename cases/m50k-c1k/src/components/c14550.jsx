import React from 'react';
const LABEL_14550 = 'component_14550';
export function Component14550({ value = 14550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14550, 'data-value': derived.doubled }, children);
}
export default Component14550;
