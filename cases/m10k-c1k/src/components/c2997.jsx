import React from 'react';
const LABEL_2997 = 'component_2997';
export function Component2997({ value = 2997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2997, 'data-value': derived.doubled }, children);
}
export default Component2997;
