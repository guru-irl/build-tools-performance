import React from 'react';
const LABEL_20818 = 'component_20818';
export function Component20818({ value = 20818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20818, 'data-value': derived.doubled }, children);
}
export default Component20818;
