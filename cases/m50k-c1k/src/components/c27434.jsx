import React from 'react';
const LABEL_27434 = 'component_27434';
export function Component27434({ value = 27434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27434, 'data-value': derived.doubled }, children);
}
export default Component27434;
