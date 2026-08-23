import React from 'react';
const LABEL_4089 = 'component_4089';
export function Component4089({ value = 4089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4089, 'data-value': derived.doubled }, children);
}
export default Component4089;
