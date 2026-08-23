import React from 'react';
const LABEL_39993 = 'component_39993';
export function Component39993({ value = 39993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39993, 'data-value': derived.doubled }, children);
}
export default Component39993;
