import React from 'react';
const LABEL_17965 = 'component_17965';
export function Component17965({ value = 17965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17965, 'data-value': derived.doubled }, children);
}
export default Component17965;
