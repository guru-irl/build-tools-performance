import React from 'react';
const LABEL_17405 = 'component_17405';
export function Component17405({ value = 17405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17405, 'data-value': derived.doubled }, children);
}
export default Component17405;
