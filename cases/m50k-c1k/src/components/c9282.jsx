import React from 'react';
const LABEL_9282 = 'component_9282';
export function Component9282({ value = 9282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9282, 'data-value': derived.doubled }, children);
}
export default Component9282;
