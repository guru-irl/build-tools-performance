import React from 'react';
const LABEL_23282 = 'component_23282';
export function Component23282({ value = 23282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23282, 'data-value': derived.doubled }, children);
}
export default Component23282;
