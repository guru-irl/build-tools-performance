import React from 'react';
const LABEL_26969 = 'component_26969';
export function Component26969({ value = 26969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26969, 'data-value': derived.doubled }, children);
}
export default Component26969;
