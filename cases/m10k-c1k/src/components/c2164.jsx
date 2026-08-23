import React from 'react';
const LABEL_2164 = 'component_2164';
export function Component2164({ value = 2164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2164, 'data-value': derived.doubled }, children);
}
export default Component2164;
