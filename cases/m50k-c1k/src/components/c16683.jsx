import React from 'react';
const LABEL_16683 = 'component_16683';
export function Component16683({ value = 16683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16683, 'data-value': derived.doubled }, children);
}
export default Component16683;
