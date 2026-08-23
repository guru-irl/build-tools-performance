import React from 'react';
const LABEL_2196 = 'component_2196';
export function Component2196({ value = 2196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2196, 'data-value': derived.doubled }, children);
}
export default Component2196;
