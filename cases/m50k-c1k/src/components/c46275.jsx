import React from 'react';
const LABEL_46275 = 'component_46275';
export function Component46275({ value = 46275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46275, 'data-value': derived.doubled }, children);
}
export default Component46275;
