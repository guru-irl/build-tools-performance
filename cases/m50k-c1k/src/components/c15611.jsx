import React from 'react';
const LABEL_15611 = 'component_15611';
export function Component15611({ value = 15611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15611, 'data-value': derived.doubled }, children);
}
export default Component15611;
