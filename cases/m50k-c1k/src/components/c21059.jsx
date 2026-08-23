import React from 'react';
const LABEL_21059 = 'component_21059';
export function Component21059({ value = 21059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21059, 'data-value': derived.doubled }, children);
}
export default Component21059;
