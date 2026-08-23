import React from 'react';
const LABEL_20236 = 'component_20236';
export function Component20236({ value = 20236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20236, 'data-value': derived.doubled }, children);
}
export default Component20236;
