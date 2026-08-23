import React from 'react';
const LABEL_11993 = 'component_11993';
export function Component11993({ value = 11993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11993, 'data-value': derived.doubled }, children);
}
export default Component11993;
