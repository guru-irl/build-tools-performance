import React from 'react';
const LABEL_8589 = 'component_8589';
export function Component8589({ value = 8589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8589, 'data-value': derived.doubled }, children);
}
export default Component8589;
