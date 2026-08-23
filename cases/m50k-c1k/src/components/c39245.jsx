import React from 'react';
const LABEL_39245 = 'component_39245';
export function Component39245({ value = 39245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39245, 'data-value': derived.doubled }, children);
}
export default Component39245;
