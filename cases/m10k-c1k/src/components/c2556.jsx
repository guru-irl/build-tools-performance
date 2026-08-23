import React from 'react';
const LABEL_2556 = 'component_2556';
export function Component2556({ value = 2556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2556, 'data-value': derived.doubled }, children);
}
export default Component2556;
