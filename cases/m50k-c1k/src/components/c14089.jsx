import React from 'react';
const LABEL_14089 = 'component_14089';
export function Component14089({ value = 14089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14089, 'data-value': derived.doubled }, children);
}
export default Component14089;
