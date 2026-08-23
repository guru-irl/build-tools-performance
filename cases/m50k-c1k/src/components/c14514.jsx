import React from 'react';
const LABEL_14514 = 'component_14514';
export function Component14514({ value = 14514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14514, 'data-value': derived.doubled }, children);
}
export default Component14514;
