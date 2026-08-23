import React from 'react';
const LABEL_17136 = 'component_17136';
export function Component17136({ value = 17136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17136, 'data-value': derived.doubled }, children);
}
export default Component17136;
