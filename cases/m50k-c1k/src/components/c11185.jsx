import React from 'react';
const LABEL_11185 = 'component_11185';
export function Component11185({ value = 11185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11185, 'data-value': derived.doubled }, children);
}
export default Component11185;
