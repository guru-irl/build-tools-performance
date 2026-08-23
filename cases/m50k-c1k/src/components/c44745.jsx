import React from 'react';
const LABEL_44745 = 'component_44745';
export function Component44745({ value = 44745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44745, 'data-value': derived.doubled }, children);
}
export default Component44745;
