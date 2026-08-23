import React from 'react';
const LABEL_26185 = 'component_26185';
export function Component26185({ value = 26185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26185, 'data-value': derived.doubled }, children);
}
export default Component26185;
