import React from 'react';
const LABEL_37672 = 'component_37672';
export function Component37672({ value = 37672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37672, 'data-value': derived.doubled }, children);
}
export default Component37672;
