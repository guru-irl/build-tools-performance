import React from 'react';
const LABEL_15466 = 'component_15466';
export function Component15466({ value = 15466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15466, 'data-value': derived.doubled }, children);
}
export default Component15466;
