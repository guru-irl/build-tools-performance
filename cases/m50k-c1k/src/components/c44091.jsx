import React from 'react';
const LABEL_44091 = 'component_44091';
export function Component44091({ value = 44091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44091, 'data-value': derived.doubled }, children);
}
export default Component44091;
