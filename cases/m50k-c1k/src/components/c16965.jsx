import React from 'react';
const LABEL_16965 = 'component_16965';
export function Component16965({ value = 16965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16965, 'data-value': derived.doubled }, children);
}
export default Component16965;
