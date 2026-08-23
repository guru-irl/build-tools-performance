import React from 'react';
const LABEL_683 = 'component_683';
export function Component683({ value = 683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_683, 'data-value': derived.doubled }, children);
}
export default Component683;
