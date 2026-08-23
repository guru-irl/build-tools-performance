import React from 'react';
const LABEL_9681 = 'component_9681';
export function Component9681({ value = 9681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9681, 'data-value': derived.doubled }, children);
}
export default Component9681;
