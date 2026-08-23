import React from 'react';
const LABEL_15505 = 'component_15505';
export function Component15505({ value = 15505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15505, 'data-value': derived.doubled }, children);
}
export default Component15505;
