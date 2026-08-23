import React from 'react';
const LABEL_17139 = 'component_17139';
export function Component17139({ value = 17139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17139, 'data-value': derived.doubled }, children);
}
export default Component17139;
