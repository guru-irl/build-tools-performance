import React from 'react';
const LABEL_39965 = 'component_39965';
export function Component39965({ value = 39965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39965, 'data-value': derived.doubled }, children);
}
export default Component39965;
