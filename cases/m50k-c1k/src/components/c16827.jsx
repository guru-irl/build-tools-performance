import React from 'react';
const LABEL_16827 = 'component_16827';
export function Component16827({ value = 16827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16827, 'data-value': derived.doubled }, children);
}
export default Component16827;
