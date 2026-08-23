import React from 'react';
const LABEL_14999 = 'component_14999';
export function Component14999({ value = 14999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14999, 'data-value': derived.doubled }, children);
}
export default Component14999;
