import React from 'react';
const LABEL_20089 = 'component_20089';
export function Component20089({ value = 20089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20089, 'data-value': derived.doubled }, children);
}
export default Component20089;
