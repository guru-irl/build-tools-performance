import React from 'react';
const LABEL_8551 = 'component_8551';
export function Component8551({ value = 8551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8551, 'data-value': derived.doubled }, children);
}
export default Component8551;
