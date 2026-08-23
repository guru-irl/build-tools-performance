import React from 'react';
const LABEL_19965 = 'component_19965';
export function Component19965({ value = 19965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19965, 'data-value': derived.doubled }, children);
}
export default Component19965;
