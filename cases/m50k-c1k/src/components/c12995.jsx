import React from 'react';
const LABEL_12995 = 'component_12995';
export function Component12995({ value = 12995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12995, 'data-value': derived.doubled }, children);
}
export default Component12995;
