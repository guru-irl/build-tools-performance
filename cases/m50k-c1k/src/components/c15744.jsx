import React from 'react';
const LABEL_15744 = 'component_15744';
export function Component15744({ value = 15744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15744, 'data-value': derived.doubled }, children);
}
export default Component15744;
