import React from 'react';
const LABEL_45185 = 'component_45185';
export function Component45185({ value = 45185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45185, 'data-value': derived.doubled }, children);
}
export default Component45185;
