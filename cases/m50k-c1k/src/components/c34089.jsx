import React from 'react';
const LABEL_34089 = 'component_34089';
export function Component34089({ value = 34089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34089, 'data-value': derived.doubled }, children);
}
export default Component34089;
