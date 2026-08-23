import React from 'react';
const LABEL_4582 = 'component_4582';
export function Component4582({ value = 4582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4582, 'data-value': derived.doubled }, children);
}
export default Component4582;
