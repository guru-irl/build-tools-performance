import React from 'react';
const LABEL_15265 = 'component_15265';
export function Component15265({ value = 15265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15265, 'data-value': derived.doubled }, children);
}
export default Component15265;
