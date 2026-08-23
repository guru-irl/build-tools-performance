import React from 'react';
const LABEL_17175 = 'component_17175';
export function Component17175({ value = 17175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17175, 'data-value': derived.doubled }, children);
}
export default Component17175;
