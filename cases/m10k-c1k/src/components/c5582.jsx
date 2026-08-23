import React from 'react';
const LABEL_5582 = 'component_5582';
export function Component5582({ value = 5582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5582, 'data-value': derived.doubled }, children);
}
export default Component5582;
