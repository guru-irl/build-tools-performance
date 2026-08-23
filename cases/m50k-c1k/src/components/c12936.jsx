import React from 'react';
const LABEL_12936 = 'component_12936';
export function Component12936({ value = 12936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12936, 'data-value': derived.doubled }, children);
}
export default Component12936;
