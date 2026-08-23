import React from 'react';
const LABEL_39019 = 'component_39019';
export function Component39019({ value = 39019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39019, 'data-value': derived.doubled }, children);
}
export default Component39019;
