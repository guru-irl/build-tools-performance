import React from 'react';
const LABEL_17498 = 'component_17498';
export function Component17498({ value = 17498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17498, 'data-value': derived.doubled }, children);
}
export default Component17498;
