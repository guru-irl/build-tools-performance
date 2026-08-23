import React from 'react';
const LABEL_12320 = 'component_12320';
export function Component12320({ value = 12320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12320, 'data-value': derived.doubled }, children);
}
export default Component12320;
