import React from 'react';
const LABEL_39860 = 'component_39860';
export function Component39860({ value = 39860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39860, 'data-value': derived.doubled }, children);
}
export default Component39860;
