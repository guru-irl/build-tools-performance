import React from 'react';
const LABEL_39061 = 'component_39061';
export function Component39061({ value = 39061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39061, 'data-value': derived.doubled }, children);
}
export default Component39061;
