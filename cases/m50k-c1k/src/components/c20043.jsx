import React from 'react';
const LABEL_20043 = 'component_20043';
export function Component20043({ value = 20043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20043, 'data-value': derived.doubled }, children);
}
export default Component20043;
