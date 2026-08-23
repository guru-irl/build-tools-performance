import React from 'react';
const LABEL_39022 = 'component_39022';
export function Component39022({ value = 39022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39022, 'data-value': derived.doubled }, children);
}
export default Component39022;
