import React from 'react';
const LABEL_22785 = 'component_22785';
export function Component22785({ value = 22785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22785, 'data-value': derived.doubled }, children);
}
export default Component22785;
