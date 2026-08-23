import React from 'react';
const LABEL_46713 = 'component_46713';
export function Component46713({ value = 46713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46713, 'data-value': derived.doubled }, children);
}
export default Component46713;
