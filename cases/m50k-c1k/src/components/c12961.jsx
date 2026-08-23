import React from 'react';
const LABEL_12961 = 'component_12961';
export function Component12961({ value = 12961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12961, 'data-value': derived.doubled }, children);
}
export default Component12961;
