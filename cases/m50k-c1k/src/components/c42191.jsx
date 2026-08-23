import React from 'react';
const LABEL_42191 = 'component_42191';
export function Component42191({ value = 42191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42191, 'data-value': derived.doubled }, children);
}
export default Component42191;
