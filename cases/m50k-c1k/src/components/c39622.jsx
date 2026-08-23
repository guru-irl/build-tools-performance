import React from 'react';
const LABEL_39622 = 'component_39622';
export function Component39622({ value = 39622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39622, 'data-value': derived.doubled }, children);
}
export default Component39622;
