import React from 'react';
const LABEL_32363 = 'component_32363';
export function Component32363({ value = 32363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32363, 'data-value': derived.doubled }, children);
}
export default Component32363;
