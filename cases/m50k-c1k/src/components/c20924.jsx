import React from 'react';
const LABEL_20924 = 'component_20924';
export function Component20924({ value = 20924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20924, 'data-value': derived.doubled }, children);
}
export default Component20924;
