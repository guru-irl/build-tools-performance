import React from 'react';
const LABEL_17111 = 'component_17111';
export function Component17111({ value = 17111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17111, 'data-value': derived.doubled }, children);
}
export default Component17111;
