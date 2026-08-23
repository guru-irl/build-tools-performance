import React from 'react';
const LABEL_15119 = 'component_15119';
export function Component15119({ value = 15119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15119, 'data-value': derived.doubled }, children);
}
export default Component15119;
