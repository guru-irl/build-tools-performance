import React from 'react';
const LABEL_32827 = 'component_32827';
export function Component32827({ value = 32827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32827, 'data-value': derived.doubled }, children);
}
export default Component32827;
