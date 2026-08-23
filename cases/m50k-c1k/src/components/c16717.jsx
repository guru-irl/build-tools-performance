import React from 'react';
const LABEL_16717 = 'component_16717';
export function Component16717({ value = 16717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16717, 'data-value': derived.doubled }, children);
}
export default Component16717;
