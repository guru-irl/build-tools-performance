import React from 'react';
const LABEL_7456 = 'component_7456';
export function Component7456({ value = 7456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7456, 'data-value': derived.doubled }, children);
}
export default Component7456;
