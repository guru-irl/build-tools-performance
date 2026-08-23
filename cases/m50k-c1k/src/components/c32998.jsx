import React from 'react';
const LABEL_32998 = 'component_32998';
export function Component32998({ value = 32998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32998, 'data-value': derived.doubled }, children);
}
export default Component32998;
