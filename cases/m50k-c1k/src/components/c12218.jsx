import React from 'react';
const LABEL_12218 = 'component_12218';
export function Component12218({ value = 12218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12218, 'data-value': derived.doubled }, children);
}
export default Component12218;
