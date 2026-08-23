import React from 'react';
const LABEL_22200 = 'component_22200';
export function Component22200({ value = 22200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22200, 'data-value': derived.doubled }, children);
}
export default Component22200;
