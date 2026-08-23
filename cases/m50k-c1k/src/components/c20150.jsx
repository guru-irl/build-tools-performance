import React from 'react';
const LABEL_20150 = 'component_20150';
export function Component20150({ value = 20150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20150, 'data-value': derived.doubled }, children);
}
export default Component20150;
