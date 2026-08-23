import React from 'react';
const LABEL_20170 = 'component_20170';
export function Component20170({ value = 20170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20170, 'data-value': derived.doubled }, children);
}
export default Component20170;
