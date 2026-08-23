import React from 'react';
const LABEL_17365 = 'component_17365';
export function Component17365({ value = 17365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17365, 'data-value': derived.doubled }, children);
}
export default Component17365;
