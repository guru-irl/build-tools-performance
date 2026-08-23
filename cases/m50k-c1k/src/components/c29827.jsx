import React from 'react';
const LABEL_29827 = 'component_29827';
export function Component29827({ value = 29827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29827, 'data-value': derived.doubled }, children);
}
export default Component29827;
