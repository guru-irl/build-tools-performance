import React from 'react';
const LABEL_15590 = 'component_15590';
export function Component15590({ value = 15590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15590, 'data-value': derived.doubled }, children);
}
export default Component15590;
