import React from 'react';
const LABEL_45683 = 'component_45683';
export function Component45683({ value = 45683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45683, 'data-value': derived.doubled }, children);
}
export default Component45683;
