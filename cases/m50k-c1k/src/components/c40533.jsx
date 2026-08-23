import React from 'react';
const LABEL_40533 = 'component_40533';
export function Component40533({ value = 40533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40533, 'data-value': derived.doubled }, children);
}
export default Component40533;
