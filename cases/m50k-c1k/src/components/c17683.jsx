import React from 'react';
const LABEL_17683 = 'component_17683';
export function Component17683({ value = 17683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17683, 'data-value': derived.doubled }, children);
}
export default Component17683;
