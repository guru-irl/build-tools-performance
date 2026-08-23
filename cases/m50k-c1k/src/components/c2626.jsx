import React from 'react';
const LABEL_2626 = 'component_2626';
export function Component2626({ value = 2626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2626, 'data-value': derived.doubled }, children);
}
export default Component2626;
