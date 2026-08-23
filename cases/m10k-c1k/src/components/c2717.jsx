import React from 'react';
const LABEL_2717 = 'component_2717';
export function Component2717({ value = 2717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2717, 'data-value': derived.doubled }, children);
}
export default Component2717;
