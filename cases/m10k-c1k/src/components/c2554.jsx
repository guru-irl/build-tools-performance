import React from 'react';
const LABEL_2554 = 'component_2554';
export function Component2554({ value = 2554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2554, 'data-value': derived.doubled }, children);
}
export default Component2554;
