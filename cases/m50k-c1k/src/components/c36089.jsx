import React from 'react';
const LABEL_36089 = 'component_36089';
export function Component36089({ value = 36089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36089, 'data-value': derived.doubled }, children);
}
export default Component36089;
