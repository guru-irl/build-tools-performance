import React from 'react';
const LABEL_21920 = 'component_21920';
export function Component21920({ value = 21920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21920, 'data-value': derived.doubled }, children);
}
export default Component21920;
