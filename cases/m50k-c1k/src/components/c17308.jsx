import React from 'react';
const LABEL_17308 = 'component_17308';
export function Component17308({ value = 17308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17308, 'data-value': derived.doubled }, children);
}
export default Component17308;
