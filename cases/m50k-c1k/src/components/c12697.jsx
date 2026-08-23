import React from 'react';
const LABEL_12697 = 'component_12697';
export function Component12697({ value = 12697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12697, 'data-value': derived.doubled }, children);
}
export default Component12697;
