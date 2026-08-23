import React from 'react';
const LABEL_45965 = 'component_45965';
export function Component45965({ value = 45965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45965, 'data-value': derived.doubled }, children);
}
export default Component45965;
