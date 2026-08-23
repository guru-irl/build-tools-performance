import React from 'react';
const LABEL_20862 = 'component_20862';
export function Component20862({ value = 20862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20862, 'data-value': derived.doubled }, children);
}
export default Component20862;
