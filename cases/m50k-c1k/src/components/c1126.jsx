import React from 'react';
const LABEL_1126 = 'component_1126';
export function Component1126({ value = 1126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1126, 'data-value': derived.doubled }, children);
}
export default Component1126;
