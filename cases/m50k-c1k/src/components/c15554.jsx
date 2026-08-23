import React from 'react';
const LABEL_15554 = 'component_15554';
export function Component15554({ value = 15554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15554, 'data-value': derived.doubled }, children);
}
export default Component15554;
