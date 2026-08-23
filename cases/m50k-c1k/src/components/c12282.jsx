import React from 'react';
const LABEL_12282 = 'component_12282';
export function Component12282({ value = 12282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12282, 'data-value': derived.doubled }, children);
}
export default Component12282;
