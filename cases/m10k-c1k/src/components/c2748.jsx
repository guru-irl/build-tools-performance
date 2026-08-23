import React from 'react';
const LABEL_2748 = 'component_2748';
export function Component2748({ value = 2748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2748, 'data-value': derived.doubled }, children);
}
export default Component2748;
