import React from 'react';
const LABEL_282 = 'component_282';
export function Component282({ value = 282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_282, 'data-value': derived.doubled }, children);
}
export default Component282;
