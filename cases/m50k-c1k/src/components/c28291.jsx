import React from 'react';
const LABEL_28291 = 'component_28291';
export function Component28291({ value = 28291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28291, 'data-value': derived.doubled }, children);
}
export default Component28291;
