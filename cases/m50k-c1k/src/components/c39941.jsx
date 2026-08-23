import React from 'react';
const LABEL_39941 = 'component_39941';
export function Component39941({ value = 39941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39941, 'data-value': derived.doubled }, children);
}
export default Component39941;
