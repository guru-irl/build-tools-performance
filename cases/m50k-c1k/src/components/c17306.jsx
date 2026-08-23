import React from 'react';
const LABEL_17306 = 'component_17306';
export function Component17306({ value = 17306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17306, 'data-value': derived.doubled }, children);
}
export default Component17306;
