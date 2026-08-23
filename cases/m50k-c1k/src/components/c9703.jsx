import React from 'react';
const LABEL_9703 = 'component_9703';
export function Component9703({ value = 9703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9703, 'data-value': derived.doubled }, children);
}
export default Component9703;
