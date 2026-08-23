import React from 'react';
const LABEL_16191 = 'component_16191';
export function Component16191({ value = 16191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16191, 'data-value': derived.doubled }, children);
}
export default Component16191;
