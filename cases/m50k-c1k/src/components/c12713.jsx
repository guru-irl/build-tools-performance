import React from 'react';
const LABEL_12713 = 'component_12713';
export function Component12713({ value = 12713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12713, 'data-value': derived.doubled }, children);
}
export default Component12713;
