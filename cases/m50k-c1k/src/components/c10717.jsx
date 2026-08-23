import React from 'react';
const LABEL_10717 = 'component_10717';
export function Component10717({ value = 10717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10717, 'data-value': derived.doubled }, children);
}
export default Component10717;
