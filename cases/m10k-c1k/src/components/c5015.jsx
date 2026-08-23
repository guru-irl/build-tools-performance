import React from 'react';
const LABEL_5015 = 'component_5015';
export function Component5015({ value = 5015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5015, 'data-value': derived.doubled }, children);
}
export default Component5015;
