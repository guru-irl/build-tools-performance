import React from 'react';
const LABEL_31717 = 'component_31717';
export function Component31717({ value = 31717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31717, 'data-value': derived.doubled }, children);
}
export default Component31717;
