import React from 'react';
const LABEL_12215 = 'component_12215';
export function Component12215({ value = 12215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12215, 'data-value': derived.doubled }, children);
}
export default Component12215;
