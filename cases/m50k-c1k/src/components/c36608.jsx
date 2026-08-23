import React from 'react';
const LABEL_36608 = 'component_36608';
export function Component36608({ value = 36608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36608, 'data-value': derived.doubled }, children);
}
export default Component36608;
