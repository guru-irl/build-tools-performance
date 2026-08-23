import React from 'react';
const LABEL_17845 = 'component_17845';
export function Component17845({ value = 17845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17845, 'data-value': derived.doubled }, children);
}
export default Component17845;
