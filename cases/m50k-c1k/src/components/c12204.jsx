import React from 'react';
const LABEL_12204 = 'component_12204';
export function Component12204({ value = 12204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12204, 'data-value': derived.doubled }, children);
}
export default Component12204;
