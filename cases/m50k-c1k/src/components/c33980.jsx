import React from 'react';
const LABEL_33980 = 'component_33980';
export function Component33980({ value = 33980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33980, 'data-value': derived.doubled }, children);
}
export default Component33980;
