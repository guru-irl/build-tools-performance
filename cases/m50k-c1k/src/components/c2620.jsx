import React from 'react';
const LABEL_2620 = 'component_2620';
export function Component2620({ value = 2620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2620, 'data-value': derived.doubled }, children);
}
export default Component2620;
