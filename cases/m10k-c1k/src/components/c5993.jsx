import React from 'react';
const LABEL_5993 = 'component_5993';
export function Component5993({ value = 5993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5993, 'data-value': derived.doubled }, children);
}
export default Component5993;
