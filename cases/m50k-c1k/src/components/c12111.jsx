import React from 'react';
const LABEL_12111 = 'component_12111';
export function Component12111({ value = 12111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12111, 'data-value': derived.doubled }, children);
}
export default Component12111;
