import React from 'react';
const LABEL_38703 = 'component_38703';
export function Component38703({ value = 38703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38703, 'data-value': derived.doubled }, children);
}
export default Component38703;
