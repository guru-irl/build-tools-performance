import React from 'react';
const LABEL_15203 = 'component_15203';
export function Component15203({ value = 15203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15203, 'data-value': derived.doubled }, children);
}
export default Component15203;
