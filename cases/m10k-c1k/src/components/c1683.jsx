import React from 'react';
const LABEL_1683 = 'component_1683';
export function Component1683({ value = 1683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1683, 'data-value': derived.doubled }, children);
}
export default Component1683;
