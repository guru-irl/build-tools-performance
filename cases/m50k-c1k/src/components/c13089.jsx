import React from 'react';
const LABEL_13089 = 'component_13089';
export function Component13089({ value = 13089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13089, 'data-value': derived.doubled }, children);
}
export default Component13089;
