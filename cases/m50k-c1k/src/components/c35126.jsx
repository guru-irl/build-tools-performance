import React from 'react';
const LABEL_35126 = 'component_35126';
export function Component35126({ value = 35126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35126, 'data-value': derived.doubled }, children);
}
export default Component35126;
