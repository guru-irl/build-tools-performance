import React from 'react';
const LABEL_20091 = 'component_20091';
export function Component20091({ value = 20091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20091, 'data-value': derived.doubled }, children);
}
export default Component20091;
