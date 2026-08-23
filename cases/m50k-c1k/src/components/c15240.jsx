import React from 'react';
const LABEL_15240 = 'component_15240';
export function Component15240({ value = 15240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15240, 'data-value': derived.doubled }, children);
}
export default Component15240;
