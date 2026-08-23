import React from 'react';
const LABEL_32472 = 'component_32472';
export function Component32472({ value = 32472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32472, 'data-value': derived.doubled }, children);
}
export default Component32472;
