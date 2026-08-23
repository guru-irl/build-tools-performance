import React from 'react';
const LABEL_2085 = 'component_2085';
export function Component2085({ value = 2085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2085, 'data-value': derived.doubled }, children);
}
export default Component2085;
