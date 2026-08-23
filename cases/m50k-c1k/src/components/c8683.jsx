import React from 'react';
const LABEL_8683 = 'component_8683';
export function Component8683({ value = 8683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8683, 'data-value': derived.doubled }, children);
}
export default Component8683;
