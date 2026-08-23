import React from 'react';
const LABEL_20117 = 'component_20117';
export function Component20117({ value = 20117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20117, 'data-value': derived.doubled }, children);
}
export default Component20117;
