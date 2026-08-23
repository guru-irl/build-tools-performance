import React from 'react';
const LABEL_5235 = 'component_5235';
export function Component5235({ value = 5235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5235, 'data-value': derived.doubled }, children);
}
export default Component5235;
