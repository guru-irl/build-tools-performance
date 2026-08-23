import React from 'react';
const LABEL_11126 = 'component_11126';
export function Component11126({ value = 11126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11126, 'data-value': derived.doubled }, children);
}
export default Component11126;
