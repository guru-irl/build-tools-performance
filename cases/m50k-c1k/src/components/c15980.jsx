import React from 'react';
const LABEL_15980 = 'component_15980';
export function Component15980({ value = 15980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15980, 'data-value': derived.doubled }, children);
}
export default Component15980;
