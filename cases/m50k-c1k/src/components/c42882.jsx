import React from 'react';
const LABEL_42882 = 'component_42882';
export function Component42882({ value = 42882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42882, 'data-value': derived.doubled }, children);
}
export default Component42882;
