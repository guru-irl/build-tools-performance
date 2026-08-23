import React from 'react';
const LABEL_46089 = 'component_46089';
export function Component46089({ value = 46089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46089, 'data-value': derived.doubled }, children);
}
export default Component46089;
