import React from 'react';
const LABEL_32258 = 'component_32258';
export function Component32258({ value = 32258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32258, 'data-value': derived.doubled }, children);
}
export default Component32258;
