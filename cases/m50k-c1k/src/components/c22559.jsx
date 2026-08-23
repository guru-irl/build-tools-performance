import React from 'react';
const LABEL_22559 = 'component_22559';
export function Component22559({ value = 22559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22559, 'data-value': derived.doubled }, children);
}
export default Component22559;
