import React from 'react';
const LABEL_2214 = 'component_2214';
export function Component2214({ value = 2214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2214, 'data-value': derived.doubled }, children);
}
export default Component2214;
