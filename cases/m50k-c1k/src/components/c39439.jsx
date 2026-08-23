import React from 'react';
const LABEL_39439 = 'component_39439';
export function Component39439({ value = 39439, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39439, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39439, 'data-value': derived.doubled }, children);
}
export default Component39439;
