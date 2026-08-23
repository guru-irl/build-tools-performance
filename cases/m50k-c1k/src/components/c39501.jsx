import React from 'react';
const LABEL_39501 = 'component_39501';
export function Component39501({ value = 39501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39501, 'data-value': derived.doubled }, children);
}
export default Component39501;
