import React from 'react';
const LABEL_2965 = 'component_2965';
export function Component2965({ value = 2965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2965, 'data-value': derived.doubled }, children);
}
export default Component2965;
