import React from 'react';
const LABEL_18523 = 'component_18523';
export function Component18523({ value = 18523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18523, 'data-value': derived.doubled }, children);
}
export default Component18523;
