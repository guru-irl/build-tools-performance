import React from 'react';
const LABEL_14666 = 'component_14666';
export function Component14666({ value = 14666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14666, 'data-value': derived.doubled }, children);
}
export default Component14666;
