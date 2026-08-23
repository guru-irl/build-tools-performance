import React from 'react';
const LABEL_7464 = 'component_7464';
export function Component7464({ value = 7464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7464, 'data-value': derived.doubled }, children);
}
export default Component7464;
