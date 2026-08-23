import React from 'react';
const LABEL_33089 = 'component_33089';
export function Component33089({ value = 33089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33089, 'data-value': derived.doubled }, children);
}
export default Component33089;
