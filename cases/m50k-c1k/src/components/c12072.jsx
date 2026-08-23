import React from 'react';
const LABEL_12072 = 'component_12072';
export function Component12072({ value = 12072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12072, 'data-value': derived.doubled }, children);
}
export default Component12072;
