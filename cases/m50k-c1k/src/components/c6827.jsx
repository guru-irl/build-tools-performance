import React from 'react';
const LABEL_6827 = 'component_6827';
export function Component6827({ value = 6827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6827, 'data-value': derived.doubled }, children);
}
export default Component6827;
