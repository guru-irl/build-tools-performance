import React from 'react';
const LABEL_42379 = 'component_42379';
export function Component42379({ value = 42379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42379, 'data-value': derived.doubled }, children);
}
export default Component42379;
