import React from 'react';
const LABEL_20234 = 'component_20234';
export function Component20234({ value = 20234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20234, 'data-value': derived.doubled }, children);
}
export default Component20234;
