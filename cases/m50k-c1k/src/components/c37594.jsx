import React from 'react';
const LABEL_37594 = 'component_37594';
export function Component37594({ value = 37594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37594, 'data-value': derived.doubled }, children);
}
export default Component37594;
