import React from 'react';
const LABEL_35785 = 'component_35785';
export function Component35785({ value = 35785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35785, 'data-value': derived.doubled }, children);
}
export default Component35785;
