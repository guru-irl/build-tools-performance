import React from 'react';
const LABEL_9405 = 'component_9405';
export function Component9405({ value = 9405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9405, 'data-value': derived.doubled }, children);
}
export default Component9405;
