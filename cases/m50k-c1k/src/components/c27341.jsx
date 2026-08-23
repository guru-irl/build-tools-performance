import React from 'react';
const LABEL_27341 = 'component_27341';
export function Component27341({ value = 27341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27341, 'data-value': derived.doubled }, children);
}
export default Component27341;
