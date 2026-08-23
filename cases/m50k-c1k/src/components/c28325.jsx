import React from 'react';
const LABEL_28325 = 'component_28325';
export function Component28325({ value = 28325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28325, 'data-value': derived.doubled }, children);
}
export default Component28325;
