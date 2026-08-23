import React from 'react';
const LABEL_12402 = 'component_12402';
export function Component12402({ value = 12402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12402, 'data-value': derived.doubled }, children);
}
export default Component12402;
