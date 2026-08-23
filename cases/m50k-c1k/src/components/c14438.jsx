import React from 'react';
const LABEL_14438 = 'component_14438';
export function Component14438({ value = 14438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14438, 'data-value': derived.doubled }, children);
}
export default Component14438;
