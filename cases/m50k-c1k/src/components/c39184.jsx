import React from 'react';
const LABEL_39184 = 'component_39184';
export function Component39184({ value = 39184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39184, 'data-value': derived.doubled }, children);
}
export default Component39184;
