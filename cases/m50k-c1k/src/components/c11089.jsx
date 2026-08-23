import React from 'react';
const LABEL_11089 = 'component_11089';
export function Component11089({ value = 11089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11089, 'data-value': derived.doubled }, children);
}
export default Component11089;
