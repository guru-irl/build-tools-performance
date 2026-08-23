import React from 'react';
const LABEL_46678 = 'component_46678';
export function Component46678({ value = 46678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46678, 'data-value': derived.doubled }, children);
}
export default Component46678;
