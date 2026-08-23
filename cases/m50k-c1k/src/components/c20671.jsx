import React from 'react';
const LABEL_20671 = 'component_20671';
export function Component20671({ value = 20671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20671, 'data-value': derived.doubled }, children);
}
export default Component20671;
