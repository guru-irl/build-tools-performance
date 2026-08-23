import React from 'react';
const LABEL_808 = 'component_808';
export function Component808({ value = 808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_808, 'data-value': derived.doubled }, children);
}
export default Component808;
