import React from 'react';
const LABEL_3486 = 'component_3486';
export function Component3486({ value = 3486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3486, 'data-value': derived.doubled }, children);
}
export default Component3486;
