import React from 'react';
const LABEL_41522 = 'component_41522';
export function Component41522({ value = 41522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41522, 'data-value': derived.doubled }, children);
}
export default Component41522;
