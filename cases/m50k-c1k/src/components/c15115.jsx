import React from 'react';
const LABEL_15115 = 'component_15115';
export function Component15115({ value = 15115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15115, 'data-value': derived.doubled }, children);
}
export default Component15115;
