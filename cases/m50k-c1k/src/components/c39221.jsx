import React from 'react';
const LABEL_39221 = 'component_39221';
export function Component39221({ value = 39221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39221, 'data-value': derived.doubled }, children);
}
export default Component39221;
