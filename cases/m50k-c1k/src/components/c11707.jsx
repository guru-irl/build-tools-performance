import React from 'react';
const LABEL_11707 = 'component_11707';
export function Component11707({ value = 11707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11707, 'data-value': derived.doubled }, children);
}
export default Component11707;
