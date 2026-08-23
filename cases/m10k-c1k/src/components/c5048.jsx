import React from 'react';
const LABEL_5048 = 'component_5048';
export function Component5048({ value = 5048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5048, 'data-value': derived.doubled }, children);
}
export default Component5048;
