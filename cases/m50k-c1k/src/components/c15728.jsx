import React from 'react';
const LABEL_15728 = 'component_15728';
export function Component15728({ value = 15728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15728, 'data-value': derived.doubled }, children);
}
export default Component15728;
