import React from 'react';
const LABEL_42683 = 'component_42683';
export function Component42683({ value = 42683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42683, 'data-value': derived.doubled }, children);
}
export default Component42683;
