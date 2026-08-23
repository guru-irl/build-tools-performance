import React from 'react';
const LABEL_2808 = 'component_2808';
export function Component2808({ value = 2808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2808, 'data-value': derived.doubled }, children);
}
export default Component2808;
