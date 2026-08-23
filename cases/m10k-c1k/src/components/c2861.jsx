import React from 'react';
const LABEL_2861 = 'component_2861';
export function Component2861({ value = 2861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2861, 'data-value': derived.doubled }, children);
}
export default Component2861;
