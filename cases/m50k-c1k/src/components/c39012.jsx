import React from 'react';
const LABEL_39012 = 'component_39012';
export function Component39012({ value = 39012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39012, 'data-value': derived.doubled }, children);
}
export default Component39012;
