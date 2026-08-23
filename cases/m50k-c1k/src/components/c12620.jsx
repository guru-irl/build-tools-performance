import React from 'react';
const LABEL_12620 = 'component_12620';
export function Component12620({ value = 12620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12620, 'data-value': derived.doubled }, children);
}
export default Component12620;
