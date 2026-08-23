import React from 'react';
const LABEL_12403 = 'component_12403';
export function Component12403({ value = 12403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12403, 'data-value': derived.doubled }, children);
}
export default Component12403;
