import React from 'react';
const LABEL_35706 = 'component_35706';
export function Component35706({ value = 35706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35706, 'data-value': derived.doubled }, children);
}
export default Component35706;
