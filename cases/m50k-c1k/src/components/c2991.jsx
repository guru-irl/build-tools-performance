import React from 'react';
const LABEL_2991 = 'component_2991';
export function Component2991({ value = 2991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2991, 'data-value': derived.doubled }, children);
}
export default Component2991;
