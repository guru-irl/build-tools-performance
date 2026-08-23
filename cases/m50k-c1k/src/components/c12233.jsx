import React from 'react';
const LABEL_12233 = 'component_12233';
export function Component12233({ value = 12233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12233, 'data-value': derived.doubled }, children);
}
export default Component12233;
