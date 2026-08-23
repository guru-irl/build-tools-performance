import React from 'react';
const LABEL_15703 = 'component_15703';
export function Component15703({ value = 15703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15703, 'data-value': derived.doubled }, children);
}
export default Component15703;
