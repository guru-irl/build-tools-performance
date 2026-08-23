import React from 'react';
const LABEL_39298 = 'component_39298';
export function Component39298({ value = 39298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39298, 'data-value': derived.doubled }, children);
}
export default Component39298;
