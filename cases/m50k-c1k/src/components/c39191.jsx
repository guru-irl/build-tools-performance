import React from 'react';
const LABEL_39191 = 'component_39191';
export function Component39191({ value = 39191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39191, 'data-value': derived.doubled }, children);
}
export default Component39191;
