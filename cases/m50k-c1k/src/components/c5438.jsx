import React from 'react';
const LABEL_5438 = 'component_5438';
export function Component5438({ value = 5438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5438, 'data-value': derived.doubled }, children);
}
export default Component5438;
