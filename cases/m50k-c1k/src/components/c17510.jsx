import React from 'react';
const LABEL_17510 = 'component_17510';
export function Component17510({ value = 17510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17510, 'data-value': derived.doubled }, children);
}
export default Component17510;
