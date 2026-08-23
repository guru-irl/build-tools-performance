import React from 'react';
const LABEL_40068 = 'component_40068';
export function Component40068({ value = 40068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40068, 'data-value': derived.doubled }, children);
}
export default Component40068;
