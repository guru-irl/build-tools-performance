import React from 'react';
const LABEL_13059 = 'component_13059';
export function Component13059({ value = 13059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13059, 'data-value': derived.doubled }, children);
}
export default Component13059;
