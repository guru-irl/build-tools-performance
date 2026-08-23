import React from 'react';
const LABEL_20324 = 'component_20324';
export function Component20324({ value = 20324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20324, 'data-value': derived.doubled }, children);
}
export default Component20324;
