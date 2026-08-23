import React from 'react';
const LABEL_17775 = 'component_17775';
export function Component17775({ value = 17775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17775, 'data-value': derived.doubled }, children);
}
export default Component17775;
