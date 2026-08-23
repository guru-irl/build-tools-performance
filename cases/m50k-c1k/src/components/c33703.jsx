import React from 'react';
const LABEL_33703 = 'component_33703';
export function Component33703({ value = 33703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33703, 'data-value': derived.doubled }, children);
}
export default Component33703;
