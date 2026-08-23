import React from 'react';
const LABEL_28594 = 'component_28594';
export function Component28594({ value = 28594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28594, 'data-value': derived.doubled }, children);
}
export default Component28594;
