import React from 'react';
const LABEL_8582 = 'component_8582';
export function Component8582({ value = 8582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8582, 'data-value': derived.doubled }, children);
}
export default Component8582;
