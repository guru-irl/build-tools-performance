import React from 'react';
const LABEL_27667 = 'component_27667';
export function Component27667({ value = 27667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27667, 'data-value': derived.doubled }, children);
}
export default Component27667;
