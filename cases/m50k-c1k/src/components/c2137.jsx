import React from 'react';
const LABEL_2137 = 'component_2137';
export function Component2137({ value = 2137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2137, 'data-value': derived.doubled }, children);
}
export default Component2137;
