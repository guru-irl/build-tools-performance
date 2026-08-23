import React from 'react';
const LABEL_21980 = 'component_21980';
export function Component21980({ value = 21980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21980, 'data-value': derived.doubled }, children);
}
export default Component21980;
