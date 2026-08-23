import React from 'react';
const LABEL_42126 = 'component_42126';
export function Component42126({ value = 42126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42126, 'data-value': derived.doubled }, children);
}
export default Component42126;
