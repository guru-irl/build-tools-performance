import React from 'react';
const LABEL_2566 = 'component_2566';
export function Component2566({ value = 2566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2566, 'data-value': derived.doubled }, children);
}
export default Component2566;
