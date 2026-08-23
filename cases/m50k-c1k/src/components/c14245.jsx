import React from 'react';
const LABEL_14245 = 'component_14245';
export function Component14245({ value = 14245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14245, 'data-value': derived.doubled }, children);
}
export default Component14245;
