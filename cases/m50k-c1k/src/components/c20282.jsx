import React from 'react';
const LABEL_20282 = 'component_20282';
export function Component20282({ value = 20282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20282, 'data-value': derived.doubled }, children);
}
export default Component20282;
