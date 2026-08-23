import React from 'react';
const LABEL_19185 = 'component_19185';
export function Component19185({ value = 19185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19185, 'data-value': derived.doubled }, children);
}
export default Component19185;
