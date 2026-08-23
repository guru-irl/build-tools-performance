import React from 'react';
const LABEL_2325 = 'component_2325';
export function Component2325({ value = 2325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2325, 'data-value': derived.doubled }, children);
}
export default Component2325;
