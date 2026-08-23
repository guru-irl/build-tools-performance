import React from 'react';
const LABEL_12237 = 'component_12237';
export function Component12237({ value = 12237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12237, 'data-value': derived.doubled }, children);
}
export default Component12237;
