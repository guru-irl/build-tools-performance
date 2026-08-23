import React from 'react';
const LABEL_27457 = 'component_27457';
export function Component27457({ value = 27457, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27457, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27457, 'data-value': derived.doubled }, children);
}
export default Component27457;
