import React from 'react';
const LABEL_8246 = 'component_8246';
export function Component8246({ value = 8246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8246, 'data-value': derived.doubled }, children);
}
export default Component8246;
