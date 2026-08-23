import React from 'react';
const LABEL_17534 = 'component_17534';
export function Component17534({ value = 17534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17534, 'data-value': derived.doubled }, children);
}
export default Component17534;
