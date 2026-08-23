import React from 'react';
const LABEL_818 = 'component_818';
export function Component818({ value = 818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_818, 'data-value': derived.doubled }, children);
}
export default Component818;
