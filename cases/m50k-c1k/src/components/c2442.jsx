import React from 'react';
const LABEL_2442 = 'component_2442';
export function Component2442({ value = 2442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2442, 'data-value': derived.doubled }, children);
}
export default Component2442;
