import React from 'react';
const LABEL_6594 = 'component_6594';
export function Component6594({ value = 6594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6594, 'data-value': derived.doubled }, children);
}
export default Component6594;
