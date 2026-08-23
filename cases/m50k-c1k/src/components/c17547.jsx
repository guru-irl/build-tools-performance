import React from 'react';
const LABEL_17547 = 'component_17547';
export function Component17547({ value = 17547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17547, 'data-value': derived.doubled }, children);
}
export default Component17547;
