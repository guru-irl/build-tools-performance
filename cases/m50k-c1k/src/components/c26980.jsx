import React from 'react';
const LABEL_26980 = 'component_26980';
export function Component26980({ value = 26980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26980, 'data-value': derived.doubled }, children);
}
export default Component26980;
