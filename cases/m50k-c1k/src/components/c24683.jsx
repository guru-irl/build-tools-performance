import React from 'react';
const LABEL_24683 = 'component_24683';
export function Component24683({ value = 24683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24683, 'data-value': derived.doubled }, children);
}
export default Component24683;
