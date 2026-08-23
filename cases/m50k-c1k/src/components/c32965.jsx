import React from 'react';
const LABEL_32965 = 'component_32965';
export function Component32965({ value = 32965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32965, 'data-value': derived.doubled }, children);
}
export default Component32965;
