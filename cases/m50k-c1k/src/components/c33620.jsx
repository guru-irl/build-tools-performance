import React from 'react';
const LABEL_33620 = 'component_33620';
export function Component33620({ value = 33620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33620, 'data-value': derived.doubled }, children);
}
export default Component33620;
