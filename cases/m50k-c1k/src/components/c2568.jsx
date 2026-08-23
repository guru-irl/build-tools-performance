import React from 'react';
const LABEL_2568 = 'component_2568';
export function Component2568({ value = 2568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2568, 'data-value': derived.doubled }, children);
}
export default Component2568;
