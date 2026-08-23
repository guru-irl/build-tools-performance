import React from 'react';
const LABEL_12414 = 'component_12414';
export function Component12414({ value = 12414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12414, 'data-value': derived.doubled }, children);
}
export default Component12414;
