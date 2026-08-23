import React from 'react';
const LABEL_22126 = 'component_22126';
export function Component22126({ value = 22126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22126, 'data-value': derived.doubled }, children);
}
export default Component22126;
