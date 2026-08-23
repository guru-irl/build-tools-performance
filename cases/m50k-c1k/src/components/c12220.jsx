import React from 'react';
const LABEL_12220 = 'component_12220';
export function Component12220({ value = 12220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12220, 'data-value': derived.doubled }, children);
}
export default Component12220;
