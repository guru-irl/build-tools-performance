import React from 'react';
const LABEL_37604 = 'component_37604';
export function Component37604({ value = 37604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37604, 'data-value': derived.doubled }, children);
}
export default Component37604;
