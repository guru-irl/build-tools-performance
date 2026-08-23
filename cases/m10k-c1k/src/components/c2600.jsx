import React from 'react';
const LABEL_2600 = 'component_2600';
export function Component2600({ value = 2600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2600, 'data-value': derived.doubled }, children);
}
export default Component2600;
