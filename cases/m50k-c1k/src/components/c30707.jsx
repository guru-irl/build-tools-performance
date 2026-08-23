import React from 'react';
const LABEL_30707 = 'component_30707';
export function Component30707({ value = 30707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30707, 'data-value': derived.doubled }, children);
}
export default Component30707;
