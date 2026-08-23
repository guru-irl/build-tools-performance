import React from 'react';
const LABEL_32313 = 'component_32313';
export function Component32313({ value = 32313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32313, 'data-value': derived.doubled }, children);
}
export default Component32313;
