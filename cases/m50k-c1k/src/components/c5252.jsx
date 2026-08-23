import React from 'react';
const LABEL_5252 = 'component_5252';
export function Component5252({ value = 5252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5252, 'data-value': derived.doubled }, children);
}
export default Component5252;
