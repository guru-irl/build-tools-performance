import React from 'react';
const LABEL_16437 = 'component_16437';
export function Component16437({ value = 16437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16437, 'data-value': derived.doubled }, children);
}
export default Component16437;
