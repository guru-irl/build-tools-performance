import React from 'react';
const LABEL_28683 = 'component_28683';
export function Component28683({ value = 28683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28683, 'data-value': derived.doubled }, children);
}
export default Component28683;
