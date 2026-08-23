import React from 'react';
const LABEL_2777 = 'component_2777';
export function Component2777({ value = 2777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2777, 'data-value': derived.doubled }, children);
}
export default Component2777;
