import React from 'react';
const LABEL_17688 = 'component_17688';
export function Component17688({ value = 17688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17688, 'data-value': derived.doubled }, children);
}
export default Component17688;
