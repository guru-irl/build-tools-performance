import React from 'react';
const LABEL_27140 = 'component_27140';
export function Component27140({ value = 27140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27140, 'data-value': derived.doubled }, children);
}
export default Component27140;
