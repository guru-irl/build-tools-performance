import React from 'react';
const LABEL_12728 = 'component_12728';
export function Component12728({ value = 12728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12728, 'data-value': derived.doubled }, children);
}
export default Component12728;
