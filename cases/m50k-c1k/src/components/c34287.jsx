import React from 'react';
const LABEL_34287 = 'component_34287';
export function Component34287({ value = 34287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34287, 'data-value': derived.doubled }, children);
}
export default Component34287;
