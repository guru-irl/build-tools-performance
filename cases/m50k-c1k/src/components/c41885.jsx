import React from 'react';
const LABEL_41885 = 'component_41885';
export function Component41885({ value = 41885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41885, 'data-value': derived.doubled }, children);
}
export default Component41885;
