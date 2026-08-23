import React from 'react';
const LABEL_41205 = 'component_41205';
export function Component41205({ value = 41205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41205, 'data-value': derived.doubled }, children);
}
export default Component41205;
