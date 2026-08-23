import React from 'react';
const LABEL_8161 = 'component_8161';
export function Component8161({ value = 8161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8161, 'data-value': derived.doubled }, children);
}
export default Component8161;
