import React from 'react';
const LABEL_10865 = 'component_10865';
export function Component10865({ value = 10865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10865, 'data-value': derived.doubled }, children);
}
export default Component10865;
