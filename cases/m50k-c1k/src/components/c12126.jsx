import React from 'react';
const LABEL_12126 = 'component_12126';
export function Component12126({ value = 12126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12126, 'data-value': derived.doubled }, children);
}
export default Component12126;
