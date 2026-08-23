import React from 'react';
const LABEL_5175 = 'component_5175';
export function Component5175({ value = 5175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5175, 'data-value': derived.doubled }, children);
}
export default Component5175;
