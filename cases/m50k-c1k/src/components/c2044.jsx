import React from 'react';
const LABEL_2044 = 'component_2044';
export function Component2044({ value = 2044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2044, 'data-value': derived.doubled }, children);
}
export default Component2044;
