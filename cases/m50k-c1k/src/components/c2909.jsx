import React from 'react';
const LABEL_2909 = 'component_2909';
export function Component2909({ value = 2909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2909, 'data-value': derived.doubled }, children);
}
export default Component2909;
