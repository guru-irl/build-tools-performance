import React from 'react';
const LABEL_17373 = 'component_17373';
export function Component17373({ value = 17373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17373, 'data-value': derived.doubled }, children);
}
export default Component17373;
