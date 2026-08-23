import React from 'react';
const LABEL_38185 = 'component_38185';
export function Component38185({ value = 38185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38185, 'data-value': derived.doubled }, children);
}
export default Component38185;
