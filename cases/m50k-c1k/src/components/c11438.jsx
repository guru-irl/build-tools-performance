import React from 'react';
const LABEL_11438 = 'component_11438';
export function Component11438({ value = 11438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11438, 'data-value': derived.doubled }, children);
}
export default Component11438;
