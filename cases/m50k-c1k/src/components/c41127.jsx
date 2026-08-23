import React from 'react';
const LABEL_41127 = 'component_41127';
export function Component41127({ value = 41127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41127, 'data-value': derived.doubled }, children);
}
export default Component41127;
