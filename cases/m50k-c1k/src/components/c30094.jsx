import React from 'react';
const LABEL_30094 = 'component_30094';
export function Component30094({ value = 30094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30094, 'data-value': derived.doubled }, children);
}
export default Component30094;
