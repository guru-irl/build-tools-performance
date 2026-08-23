import React from 'react';
const LABEL_707 = 'component_707';
export function Component707({ value = 707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_707, 'data-value': derived.doubled }, children);
}
export default Component707;
