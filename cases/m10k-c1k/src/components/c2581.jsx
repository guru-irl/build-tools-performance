import React from 'react';
const LABEL_2581 = 'component_2581';
export function Component2581({ value = 2581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2581, 'data-value': derived.doubled }, children);
}
export default Component2581;
