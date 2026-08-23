import React from 'react';
const LABEL_17745 = 'component_17745';
export function Component17745({ value = 17745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17745, 'data-value': derived.doubled }, children);
}
export default Component17745;
