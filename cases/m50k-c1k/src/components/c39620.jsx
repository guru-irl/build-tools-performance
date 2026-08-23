import React from 'react';
const LABEL_39620 = 'component_39620';
export function Component39620({ value = 39620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39620, 'data-value': derived.doubled }, children);
}
export default Component39620;
