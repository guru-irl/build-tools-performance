import React from 'react';
const LABEL_39167 = 'component_39167';
export function Component39167({ value = 39167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39167, 'data-value': derived.doubled }, children);
}
export default Component39167;
