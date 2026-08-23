import React from 'react';
const LABEL_33282 = 'component_33282';
export function Component33282({ value = 33282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33282, 'data-value': derived.doubled }, children);
}
export default Component33282;
