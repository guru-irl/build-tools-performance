import React from 'react';
const LABEL_12455 = 'component_12455';
export function Component12455({ value = 12455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12455, 'data-value': derived.doubled }, children);
}
export default Component12455;
