import React from 'react';
const LABEL_27848 = 'component_27848';
export function Component27848({ value = 27848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27848, 'data-value': derived.doubled }, children);
}
export default Component27848;
