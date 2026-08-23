import React from 'react';
const LABEL_2283 = 'component_2283';
export function Component2283({ value = 2283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2283, 'data-value': derived.doubled }, children);
}
export default Component2283;
