import React from 'react';
const LABEL_14313 = 'component_14313';
export function Component14313({ value = 14313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14313, 'data-value': derived.doubled }, children);
}
export default Component14313;
