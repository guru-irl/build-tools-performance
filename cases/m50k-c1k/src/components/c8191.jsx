import React from 'react';
const LABEL_8191 = 'component_8191';
export function Component8191({ value = 8191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8191, 'data-value': derived.doubled }, children);
}
export default Component8191;
