import React from 'react';
const LABEL_15878 = 'component_15878';
export function Component15878({ value = 15878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15878, 'data-value': derived.doubled }, children);
}
export default Component15878;
