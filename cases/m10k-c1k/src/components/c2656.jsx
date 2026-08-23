import React from 'react';
const LABEL_2656 = 'component_2656';
export function Component2656({ value = 2656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2656, 'data-value': derived.doubled }, children);
}
export default Component2656;
