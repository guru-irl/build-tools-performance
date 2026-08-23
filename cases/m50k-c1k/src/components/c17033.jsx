import React from 'react';
const LABEL_17033 = 'component_17033';
export function Component17033({ value = 17033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17033, 'data-value': derived.doubled }, children);
}
export default Component17033;
