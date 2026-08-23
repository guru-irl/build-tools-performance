import React from 'react';
const LABEL_1965 = 'component_1965';
export function Component1965({ value = 1965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1965, 'data-value': derived.doubled }, children);
}
export default Component1965;
