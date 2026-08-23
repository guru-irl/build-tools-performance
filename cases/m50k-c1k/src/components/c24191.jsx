import React from 'react';
const LABEL_24191 = 'component_24191';
export function Component24191({ value = 24191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24191, 'data-value': derived.doubled }, children);
}
export default Component24191;
