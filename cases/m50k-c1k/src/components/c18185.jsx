import React from 'react';
const LABEL_18185 = 'component_18185';
export function Component18185({ value = 18185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18185, 'data-value': derived.doubled }, children);
}
export default Component18185;
