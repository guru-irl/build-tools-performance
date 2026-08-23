import React from 'react';
const LABEL_12497 = 'component_12497';
export function Component12497({ value = 12497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12497, 'data-value': derived.doubled }, children);
}
export default Component12497;
