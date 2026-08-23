import React from 'react';
const LABEL_17474 = 'component_17474';
export function Component17474({ value = 17474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17474, 'data-value': derived.doubled }, children);
}
export default Component17474;
