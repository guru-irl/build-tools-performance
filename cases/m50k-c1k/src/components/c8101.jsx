import React from 'react';
const LABEL_8101 = 'component_8101';
export function Component8101({ value = 8101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8101, 'data-value': derived.doubled }, children);
}
export default Component8101;
