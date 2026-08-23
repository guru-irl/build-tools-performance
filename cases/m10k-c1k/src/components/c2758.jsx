import React from 'react';
const LABEL_2758 = 'component_2758';
export function Component2758({ value = 2758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2758, 'data-value': derived.doubled }, children);
}
export default Component2758;
