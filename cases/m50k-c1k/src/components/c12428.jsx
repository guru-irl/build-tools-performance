import React from 'react';
const LABEL_12428 = 'component_12428';
export function Component12428({ value = 12428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12428, 'data-value': derived.doubled }, children);
}
export default Component12428;
