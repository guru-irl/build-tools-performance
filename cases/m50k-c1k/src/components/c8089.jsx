import React from 'react';
const LABEL_8089 = 'component_8089';
export function Component8089({ value = 8089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8089, 'data-value': derived.doubled }, children);
}
export default Component8089;
