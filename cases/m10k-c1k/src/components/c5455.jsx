import React from 'react';
const LABEL_5455 = 'component_5455';
export function Component5455({ value = 5455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5455, 'data-value': derived.doubled }, children);
}
export default Component5455;
