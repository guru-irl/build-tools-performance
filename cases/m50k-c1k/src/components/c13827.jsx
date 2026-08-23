import React from 'react';
const LABEL_13827 = 'component_13827';
export function Component13827({ value = 13827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13827, 'data-value': derived.doubled }, children);
}
export default Component13827;
