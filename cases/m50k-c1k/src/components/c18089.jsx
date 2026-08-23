import React from 'react';
const LABEL_18089 = 'component_18089';
export function Component18089({ value = 18089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18089, 'data-value': derived.doubled }, children);
}
export default Component18089;
