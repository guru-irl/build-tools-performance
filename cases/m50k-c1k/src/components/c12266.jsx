import React from 'react';
const LABEL_12266 = 'component_12266';
export function Component12266({ value = 12266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12266, 'data-value': derived.doubled }, children);
}
export default Component12266;
