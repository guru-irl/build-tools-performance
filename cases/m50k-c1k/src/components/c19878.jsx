import React from 'react';
const LABEL_19878 = 'component_19878';
export function Component19878({ value = 19878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19878, 'data-value': derived.doubled }, children);
}
export default Component19878;
