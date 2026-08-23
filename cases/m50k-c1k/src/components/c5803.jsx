import React from 'react';
const LABEL_5803 = 'component_5803';
export function Component5803({ value = 5803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5803, 'data-value': derived.doubled }, children);
}
export default Component5803;
