import React from 'react';
const LABEL_29942 = 'component_29942';
export function Component29942({ value = 29942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29942, 'data-value': derived.doubled }, children);
}
export default Component29942;
