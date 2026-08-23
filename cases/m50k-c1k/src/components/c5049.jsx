import React from 'react';
const LABEL_5049 = 'component_5049';
export function Component5049({ value = 5049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5049, 'data-value': derived.doubled }, children);
}
export default Component5049;
