import React from 'react';
const LABEL_36993 = 'component_36993';
export function Component36993({ value = 36993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36993, 'data-value': derived.doubled }, children);
}
export default Component36993;
