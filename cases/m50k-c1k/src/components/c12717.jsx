import React from 'react';
const LABEL_12717 = 'component_12717';
export function Component12717({ value = 12717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12717, 'data-value': derived.doubled }, children);
}
export default Component12717;
