import React from 'react';
const LABEL_11683 = 'component_11683';
export function Component11683({ value = 11683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11683, 'data-value': derived.doubled }, children);
}
export default Component11683;
