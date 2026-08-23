import React from 'react';
const LABEL_32755 = 'component_32755';
export function Component32755({ value = 32755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32755, 'data-value': derived.doubled }, children);
}
export default Component32755;
