import React from 'react';
const LABEL_2700 = 'component_2700';
export function Component2700({ value = 2700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2700, 'data-value': derived.doubled }, children);
}
export default Component2700;
