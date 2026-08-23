import React from 'react';
const LABEL_32282 = 'component_32282';
export function Component32282({ value = 32282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32282, 'data-value': derived.doubled }, children);
}
export default Component32282;
