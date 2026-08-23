import React from 'react';
const LABEL_37464 = 'component_37464';
export function Component37464({ value = 37464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37464, 'data-value': derived.doubled }, children);
}
export default Component37464;
