import React from 'react';
const LABEL_10620 = 'component_10620';
export function Component10620({ value = 10620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10620, 'data-value': derived.doubled }, children);
}
export default Component10620;
