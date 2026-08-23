import React from 'react';
const LABEL_8125 = 'component_8125';
export function Component8125({ value = 8125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8125, 'data-value': derived.doubled }, children);
}
export default Component8125;
