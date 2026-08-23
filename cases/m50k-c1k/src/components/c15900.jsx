import React from 'react';
const LABEL_15900 = 'component_15900';
export function Component15900({ value = 15900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15900, 'data-value': derived.doubled }, children);
}
export default Component15900;
