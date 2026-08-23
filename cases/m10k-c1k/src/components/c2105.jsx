import React from 'react';
const LABEL_2105 = 'component_2105';
export function Component2105({ value = 2105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2105, 'data-value': derived.doubled }, children);
}
export default Component2105;
