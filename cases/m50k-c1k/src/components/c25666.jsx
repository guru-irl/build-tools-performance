import React from 'react';
const LABEL_25666 = 'component_25666';
export function Component25666({ value = 25666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25666, 'data-value': derived.doubled }, children);
}
export default Component25666;
