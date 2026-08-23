import React from 'react';
const LABEL_437 = 'component_437';
export function Component437({ value = 437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_437, 'data-value': derived.doubled }, children);
}
export default Component437;
