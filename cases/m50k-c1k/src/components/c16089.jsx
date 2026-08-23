import React from 'react';
const LABEL_16089 = 'component_16089';
export function Component16089({ value = 16089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16089, 'data-value': derived.doubled }, children);
}
export default Component16089;
