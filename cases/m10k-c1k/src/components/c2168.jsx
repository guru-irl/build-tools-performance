import React from 'react';
const LABEL_2168 = 'component_2168';
export function Component2168({ value = 2168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2168, 'data-value': derived.doubled }, children);
}
export default Component2168;
