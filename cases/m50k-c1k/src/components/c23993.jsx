import React from 'react';
const LABEL_23993 = 'component_23993';
export function Component23993({ value = 23993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23993, 'data-value': derived.doubled }, children);
}
export default Component23993;
