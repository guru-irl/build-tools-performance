import React from 'react';
const LABEL_26691 = 'component_26691';
export function Component26691({ value = 26691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26691, 'data-value': derived.doubled }, children);
}
export default Component26691;
