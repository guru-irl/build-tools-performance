import React from 'react';
const LABEL_2117 = 'component_2117';
export function Component2117({ value = 2117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2117, 'data-value': derived.doubled }, children);
}
export default Component2117;
