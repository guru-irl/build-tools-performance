import React from 'react';
const LABEL_1264 = 'component_1264';
export function Component1264({ value = 1264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1264, 'data-value': derived.doubled }, children);
}
export default Component1264;
