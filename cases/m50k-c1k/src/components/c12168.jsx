import React from 'react';
const LABEL_12168 = 'component_12168';
export function Component12168({ value = 12168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12168, 'data-value': derived.doubled }, children);
}
export default Component12168;
