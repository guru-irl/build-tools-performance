import React from 'react';
const LABEL_10089 = 'component_10089';
export function Component10089({ value = 10089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10089, 'data-value': derived.doubled }, children);
}
export default Component10089;
