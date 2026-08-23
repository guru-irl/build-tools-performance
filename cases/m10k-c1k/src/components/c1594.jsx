import React from 'react';
const LABEL_1594 = 'component_1594';
export function Component1594({ value = 1594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1594, 'data-value': derived.doubled }, children);
}
export default Component1594;
