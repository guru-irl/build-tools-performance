import React from 'react';
const LABEL_35544 = 'component_35544';
export function Component35544({ value = 35544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35544, 'data-value': derived.doubled }, children);
}
export default Component35544;
