import React from 'react';
const LABEL_17973 = 'component_17973';
export function Component17973({ value = 17973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17973, 'data-value': derived.doubled }, children);
}
export default Component17973;
