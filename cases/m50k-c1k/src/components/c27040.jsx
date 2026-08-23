import React from 'react';
const LABEL_27040 = 'component_27040';
export function Component27040({ value = 27040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27040, 'data-value': derived.doubled }, children);
}
export default Component27040;
