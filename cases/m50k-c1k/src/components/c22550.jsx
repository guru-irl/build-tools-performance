import React from 'react';
const LABEL_22550 = 'component_22550';
export function Component22550({ value = 22550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22550, 'data-value': derived.doubled }, children);
}
export default Component22550;
