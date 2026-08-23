import React from 'react';
const LABEL_27178 = 'component_27178';
export function Component27178({ value = 27178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27178, 'data-value': derived.doubled }, children);
}
export default Component27178;
