import React from 'react';
const LABEL_5464 = 'component_5464';
export function Component5464({ value = 5464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5464, 'data-value': derived.doubled }, children);
}
export default Component5464;
