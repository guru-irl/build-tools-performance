import React from 'react';
const LABEL_12587 = 'component_12587';
export function Component12587({ value = 12587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12587, 'data-value': derived.doubled }, children);
}
export default Component12587;
