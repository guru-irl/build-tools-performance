import React from 'react';
const LABEL_15364 = 'component_15364';
export function Component15364({ value = 15364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15364, 'data-value': derived.doubled }, children);
}
export default Component15364;
