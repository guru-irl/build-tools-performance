import React from 'react';
const LABEL_12760 = 'component_12760';
export function Component12760({ value = 12760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12760, 'data-value': derived.doubled }, children);
}
export default Component12760;
