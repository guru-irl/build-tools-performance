import React from 'react';
const LABEL_21282 = 'component_21282';
export function Component21282({ value = 21282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21282, 'data-value': derived.doubled }, children);
}
export default Component21282;
