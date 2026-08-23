import React from 'react';
const LABEL_17118 = 'component_17118';
export function Component17118({ value = 17118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17118, 'data-value': derived.doubled }, children);
}
export default Component17118;
