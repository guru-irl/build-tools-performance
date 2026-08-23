import React from 'react';
const LABEL_12828 = 'component_12828';
export function Component12828({ value = 12828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12828, 'data-value': derived.doubled }, children);
}
export default Component12828;
