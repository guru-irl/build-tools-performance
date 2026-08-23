import React from 'react';
const LABEL_32020 = 'component_32020';
export function Component32020({ value = 32020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32020, 'data-value': derived.doubled }, children);
}
export default Component32020;
