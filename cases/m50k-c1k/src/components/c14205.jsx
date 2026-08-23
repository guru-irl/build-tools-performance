import React from 'react';
const LABEL_14205 = 'component_14205';
export function Component14205({ value = 14205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14205, 'data-value': derived.doubled }, children);
}
export default Component14205;
