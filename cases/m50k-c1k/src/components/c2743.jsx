import React from 'react';
const LABEL_2743 = 'component_2743';
export function Component2743({ value = 2743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2743, 'data-value': derived.doubled }, children);
}
export default Component2743;
