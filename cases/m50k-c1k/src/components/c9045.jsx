import React from 'react';
const LABEL_9045 = 'component_9045';
export function Component9045({ value = 9045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9045, 'data-value': derived.doubled }, children);
}
export default Component9045;
