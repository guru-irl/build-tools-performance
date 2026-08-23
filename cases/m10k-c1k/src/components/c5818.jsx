import React from 'react';
const LABEL_5818 = 'component_5818';
export function Component5818({ value = 5818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5818, 'data-value': derived.doubled }, children);
}
export default Component5818;
