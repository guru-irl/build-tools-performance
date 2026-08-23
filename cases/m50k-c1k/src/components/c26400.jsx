import React from 'react';
const LABEL_26400 = 'component_26400';
export function Component26400({ value = 26400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26400, 'data-value': derived.doubled }, children);
}
export default Component26400;
