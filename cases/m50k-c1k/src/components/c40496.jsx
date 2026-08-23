import React from 'react';
const LABEL_40496 = 'component_40496';
export function Component40496({ value = 40496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40496, 'data-value': derived.doubled }, children);
}
export default Component40496;
