import React from 'react';
const LABEL_17305 = 'component_17305';
export function Component17305({ value = 17305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17305, 'data-value': derived.doubled }, children);
}
export default Component17305;
