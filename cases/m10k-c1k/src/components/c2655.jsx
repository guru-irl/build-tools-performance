import React from 'react';
const LABEL_2655 = 'component_2655';
export function Component2655({ value = 2655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2655, 'data-value': derived.doubled }, children);
}
export default Component2655;
