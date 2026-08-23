import React from 'react';
const LABEL_12845 = 'component_12845';
export function Component12845({ value = 12845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12845, 'data-value': derived.doubled }, children);
}
export default Component12845;
