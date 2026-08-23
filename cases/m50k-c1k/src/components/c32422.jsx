import React from 'react';
const LABEL_32422 = 'component_32422';
export function Component32422({ value = 32422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32422, 'data-value': derived.doubled }, children);
}
export default Component32422;
