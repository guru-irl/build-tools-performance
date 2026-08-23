import React from 'react';
const LABEL_29808 = 'component_29808';
export function Component29808({ value = 29808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29808, 'data-value': derived.doubled }, children);
}
export default Component29808;
