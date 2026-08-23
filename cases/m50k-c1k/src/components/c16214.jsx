import React from 'react';
const LABEL_16214 = 'component_16214';
export function Component16214({ value = 16214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16214, 'data-value': derived.doubled }, children);
}
export default Component16214;
