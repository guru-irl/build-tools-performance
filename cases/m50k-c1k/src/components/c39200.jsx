import React from 'react';
const LABEL_39200 = 'component_39200';
export function Component39200({ value = 39200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39200, 'data-value': derived.doubled }, children);
}
export default Component39200;
