import React from 'react';
const LABEL_14282 = 'component_14282';
export function Component14282({ value = 14282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14282, 'data-value': derived.doubled }, children);
}
export default Component14282;
