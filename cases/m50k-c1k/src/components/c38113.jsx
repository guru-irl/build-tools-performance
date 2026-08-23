import React from 'react';
const LABEL_38113 = 'component_38113';
export function Component38113({ value = 38113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38113, 'data-value': derived.doubled }, children);
}
export default Component38113;
